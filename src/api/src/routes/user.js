const router = require("express").Router();
const userController = require("../controllers/UserController");

router.post("/users", userController.createUser);
router.get("/users", userController.listAllUsers);
router.get("/users/:id", userController.findUserById);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
