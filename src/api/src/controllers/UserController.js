const db = require("../../../config/index.js");

exports.createUser = async (req, res) => {
  const { username, person_name, email, address, password, bio } = req.body;
  const response = await db.query(
    "INSERT INTO users (username, person_name, email, address, password, bio) VALUES ($1, $2, $3, $4, $5, $6)",
    [username, person_name, email, address, password, bio]
  );

  res.status(201).send({
    message: "User registered successfully!",
    body: {
      user: { username, person_name, password, email, address, password, bio },
    },
  });
};

exports.listAllUsers = async (req, res) => {
  const response = await db.query("SELECT * FROM users");
  res.status(200).send(response.rows);
};

exports.findUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM users WHERE id = $1", [
    userId,
  ]);
  res.status(200).send(response.rows);
};

exports.updateUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { person_name, username, email, password, bio } = req.body;

  const response = await db.query(
    "UPDATE users SET person_name = $1, username = $2, email = $3, password = $4, bio = $5 WHERE id = $4",
    [person_name, username, email, password, bio, userId]
  );

  res.status(200).send({ message: "User Updated Successfully!" });
};

exports.deleteUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  await db.query("DELETE FROM users WHERE id = $1", [userId]);

  res.status(200).send({ message: "User deleted successfully!", userId });
};
