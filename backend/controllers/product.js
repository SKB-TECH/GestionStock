const Product = require("../models/product");
const createError = require("http-errors");
const { productRegisterValidation } = require("../utils/shcemaVlidation");
const { default: mongoose } = require("mongoose");

const getProduct = async (req, res, next) => {
  const id = req.params.id;
  if (mongoose.isValidObjectId(id)) {
    try {
      const product = await Product.findById(id);

      if (!product) {
        next(createError.NotFound("Product not found"));
      } else {
        res.json({
          message: "",
          data: product,
          error: null,
          success: true,
        });
      }
    } catch (error) {
      next(error);
    }
  } else {
    next(createError.BadRequest("Invalid ID"));
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      next(createError.NotFound("Product not found"));
    } else {
      res.json({
        message: "",
        data: products,
        error: null,
        success: true,
      });
    }
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const result = await productRegisterValidation.validateAsync(req.body);

    const isExist = await Product.findOne({ name: result.name });

    if (isExist) {
      next(createError.Conflict("Product already exists"));
    } else {
      const newProduct = new Product({ ...result });

      const savedProduct = await newProduct.save();

      res.json({
        message: "Created successful",
        data: savedProduct,
        error: null,
        success: true,
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const id = req.params.id;

  if (mongoose.isValidObjectId(id)) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (updatedProduct) {
        res.json({
          message: "Updated successful",
          data: updatedProduct,
          error: null,
          success: true,
        });
      } else {
        next(createError.NotFound("Product not found"));
      }
    } catch (error) {
      next(error);
    }
  } else {
    next(createError.BadRequest("Invid ID"));
  }
};

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  if (mongoose.isValidObjectId(id)) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        res.json({
          message: "Deleted successful",
          data: deletedProduct,
          error: null,
          success: true,
        });
      } else {
        next(createError.NotFound("Product not found"));
      }
    } catch (error) {
      next(error);
    }
  } else {
    next(createError.BadRequest("Invalid ID"));
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
};
