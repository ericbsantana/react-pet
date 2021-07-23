const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const cn = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: "reactpet",
  password: process.env.PGPASS,
  port: process.env.PGPORT,
};

const pool = new Pool(cn);

pool.on("error", function (err, client) {
  console.error("idle client error", err.message, err.stack);
});

pool.on("connect", () => {
  console.log("Database connected!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
