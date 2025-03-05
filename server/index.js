require("dotenv").config();
const express = require("express");
const { PORT } = require("./src/constants/env");
const { connectToDb } = require("./database/db");

const app = express();

app.listen(PORT, () => {
  connectToDb()
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("DB commection failed", error);
    });
  console.log(`Server running on port ${PORT}`);
});
