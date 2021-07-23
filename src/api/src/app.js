const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const index = require("./routes/index.js");
const userRoute = require("./routes/user.js");
const petRoute = require("./routes/pet.js");
const loginRoute = require("./routes/login.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/", userRoute);
app.use("/", petRoute);
app.use("/", loginRoute);

module.exports = app;