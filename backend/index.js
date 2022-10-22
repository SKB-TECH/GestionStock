require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("./config/db");

const app = express();
const PORT = process.env.PORT || 4400;

app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Server in running");
});

app.use((req, res, next) => {
  next(createError.NotFound("URL not found"));
});

app.use((error, req, res, next) => {
  res.json({
    message: error.message,
    error,
  });
});

app.listen(PORT, () => {
  console.log(`Server listen on ${PORT}`);
});
