require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
require("./config/db");

const app = express();
const PORT = process.env.PORT || 4400;

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server listen on ${PORT}`);
});
