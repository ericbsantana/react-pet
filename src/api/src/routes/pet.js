const express = require("express");
const router = express.Router();
const petController = require("../controllers/PetController");
const { body } = require("express-validator");

router.post(
  "/pets",
  [
    body("size").not().isEmpty().withMessage("Invalid size."),
    body("pet_name")
      .not()
      .isEmpty()
      .withMessage("Your pet name must not be empty."),
    body("pet_sex").not().isEmpty().withMessage("Invalid pet sex."),
    body("bio")
      .not()
      .isEmpty()
      .withMessage("Your biography must not be empty")
      .isLength({ min: 10 })
      .withMessage("Your biography must be at least 10 characters long."),
    body("pet_char").not().isEmpty().withMessage("Tags must not be empty!"),
  ],
  petController.createPet
);
router.get("/pets", petController.listAllPets);
router.get("/pets/:id", petController.findPetById);
router.put("/pets/:id", petController.updatePetById);
router.delete("/pets/:id", petController.deletePetById);

module.exports = router;
