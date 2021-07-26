const db = require("../../config/index.js");
const { validationResult } = require("express-validator");

exports.createUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const {
    username,
    person_name,
    email,
    address,
    password,
    bio,
    cellphone,
    cep,
    website,
    city,
  } = req.body;

  const response = await db.query(
    "INSERT INTO users (username, person_name, email, address, password, bio, phone, cep, website, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [
      username,
      person_name,
      email,
      address,
      password,
      bio,
      cellphone,
      cep,
      website,
      city,
    ]
  );
  console.log(response.log);

  res.status(200).json({
    success: true,
    message: "User registered successfully!",
    body: {
      user: {
        username,
        person_name,
        email,
        address,
        password,
        bio,
        cellphone,
        cep,
        website,
        city,
      },
    },
  });
};

exports.listAllUsers = async (req, res) => {
  const response = await db.query("SELECT * FROM users");
  res.status(200).send(response.rows);
};

exports.findUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM users WHERE user_id = $1", [
    userId,
  ]);

  if (response.rows.length === 0) {
    res.status(404).send("Error: this user does not exist!");
    return;
  }

  res.status(200).send(response.rows);
};

exports.updateUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { person_name, username, email, password, bio } = req.body;

  const response = await db.query(
    "UPDATE users SET person_name = $1, username = $2, email = $3, password = $4, bio = $5 WHERE id = $4",
    [person_name, username, email, password, bio, userId]
  );

  console.log(response);

  res.status(200).send({ message: "User Updated Successfully!" });
};

exports.deleteUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  await db.query("DELETE FROM users WHERE id = $1", [userId]);

  res.status(200).send({ message: "User deleted successfully!", userId });
};

exports.getUserPetsById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * from pets WHERE pets.pet_ownerid = $1",
    [userId]
  );

  res.status(200).send(response.rows);
};
