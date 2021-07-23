const express = require("express");
const router = express.Router();
const petController = require("../controllers/PetController");

router.post("/pets", petController.createPet);
router.get("/pets", petController.listAllPets);
router.get("/pets/:id", petController.findPetById);
router.put("/pets/:id", petController.updatePetById);
router.delete("/pets/:id", petController.deletePetById);

module.exports = router;
