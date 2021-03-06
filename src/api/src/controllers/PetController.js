const db = require("../../config/index.js");
const { validationResult } = require("express-validator");

exports.createPet = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { pet_ownerid, bio, size, pet_sex, pet_name, pet_char } = req.body;

  const q = await db.query(
    "INSERT INTO pets (pet_ownerid, bio, size, pet_sex, pet_name) VALUES ($1, $2, $3, $4, $5) RETURNING pet_id",
    [pet_ownerid, bio, size, pet_sex, pet_name]
  );

  const query = await db.query(
    "INSERT INTO pets_characteristics (pet_id_char, tags) VALUES ($1, $2)",
    [q.rows[0].pet_id, pet_char]
  );

  res.status(201).send({
    message: "Pet registered successfully!",
    body: {
      user: {
        pet_name,
        pet_sex,
        size,
        bio,
        pet_ownerid,
        pet_char,
      },
    },
  });
};

exports.listAllPets = async (req, res) => {
  const response = await db.query("SELECT * FROM pets");
  res.status(200).send(response.rows);
};

exports.findPetById = async (req, res) => {
  const petId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM pets WHERE pet_id = $1", [
    petId,
  ]);

  if (response.rows.length === 0) {
    res.status(404).send("Error: this pet does not exist!");
    return;
  }

  res.status(200).send(response.rows);
};

exports.updatePetById = async (req, res) => {
  const petId = parseInt(req.params.id);
  const { pet_ownerid, bio, size, pet_sex, pet_name } = req.body;

  const response = await db.query(
    "UPDATE pets SET pet_ownerid = $1, bio = $2, size = $3, pet_sex = $4, pet_name = $5, WHERE pet_id = $6",
    [pet_ownerid, bio, size, pet_sex, pet_name, petId]
  );

  res.status(200).send({ message: "Pet Updated Successfully!" });
};

exports.deletePetById = async (req, res) => {
  const petId = parseInt(req.params.id);
  await db.query("DELETE FROM pets WHERE pet_id = $1", [petId]);

  res.status(200).send({ message: "Pet deleted successfully!", petId });
};
