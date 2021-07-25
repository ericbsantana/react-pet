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
      const { username, user_id } = response.rows[0];

      const key = process.env.SECRET_KEY;
      const token = jwt.sign({ user_id }, key, {
        expiresIn: 300,
      });
      res.status(200).json({
        auth: true,
        message: "Login válido!",
        token: token,
        username: username,
        user_id: user_id,
      });
    } else {
      res
        .status(200)
        .json({ auth: false, message: "Login ou senha inválidos!" });
    }
  } catch (err) {
    res.status(400).json({ auth: false, message: "Login ou senha inválidos!" });
  }
};
