const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const index = require("./routes/index");
const userRoute = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", userRoute);

module.exports = app;
