const router = require("express").Router();
const productController = require("../controllers/product");

router.post("/create", productController.createProduct);

router.put("/update/:id", productController.updateProduct);

router.delete("/delete/:id", productController.deleteProduct);

router.get("/", productController.getAllProduct);

router.get("/:id", productController.getProduct);

module.exports = router;
