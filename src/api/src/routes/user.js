const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const { body } = require("express-validator");

router.post(
  "/users",
  [
    body("email").isEmail().withMessage("Invalid e-mail."),
    body("username").isLength({ min: 5 }).withMessage("Invalid username."),
    body("cellphone").isMobilePhone().withMessage("Invalid phone number."),
    body("password").isStrongPassword().withMessage("Invalid password."),
    body("person_name")
      .isLength({ min: 1 })
      .withMessage("Your name must be at least 1 character long."),
    body("bio")
      .isLength({ min: 20 })
      .withMessage("Your biography must be at least 20 characters long."),
    body("cep").isPostalCode("BR").withMessage("Invalid postal code."),
    body("city").isLength({ min: 2 }).withMessage("Invalid city name."),
    body("address").isLength({ min: 2 }).withMessage("Invalid address."),
    body("website").isURL().withMessage("Invalid URL."),
  ],
  userController.createUser
);
router.get("/users", userController.listAllUsers);
router.get("/users/:id", userController.findUserById);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
