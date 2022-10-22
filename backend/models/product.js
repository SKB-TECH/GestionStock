const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 5,
      maxLength: 50,
      unique: true,
    },
    description: String,
    stockQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
    },
    type: {
      type: String,
      require: true,
      enum: ["ALIMENTAIRE", "COSMETIQUE", "ELECTRONIQUE"],
    },
  },
  { timestamps: true }
);

module.exports = Product = model("Product", productSchema);
