const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    userName: {
      type: String,
      require: true,
      minLength: 3,
      maxLength: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["Customer ", "Admin"],
      default: "Customer",
    },
  },
  { timestamps: true }
);

module.exports = User = model("User", userSchema);
