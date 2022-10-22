const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Connection to database established"))
  .catch((error) => console.log(error));
