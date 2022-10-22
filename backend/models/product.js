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
    descipption: String,
    stockQuantity: Number,
    price: {
      type: Number,
      require: true,
    },
    type: {
      type: String,
      require: true,
      enum: ["ALIMENTAIRE ", "COSMETIQUE", "ELECTRONIQUE"],
    },
  },
  { timestamps: true }
);

module.exports = Product = model("Product", productSchema);
