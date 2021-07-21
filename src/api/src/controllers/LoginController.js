const db = require("../../config/index.js");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await db.query(
      "SELECT * FROM users WHERE (email = $1) AND (password = $2)",
      [email, password]
    );

    if (response.rows.length) {
      const { username } = response.rows[0];

      const key = process.env.SECRET_KEY;
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, key, {
        expiresIn: 300,
      });
      res.status(200).json({ auth: true, token: token, username: username });
    } else {
      res
        .status(400)
        .json({ auth: false, message: "Login ou senha inválidos!" });
    }
  } catch (err) {
    res.status(400).json({ auth: false, message: "Login ou senha inválidos!" });
  }
};
