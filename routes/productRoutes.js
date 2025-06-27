const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  deleteProduct,
} = require("../controllers/productController");

const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Public route
router.get("/", getAllProducts);

// Protected routes
router.post("/", protect, authorizeRoles("admin", "product-manager"), createProduct);
router.delete("/:id", protect, authorizeRoles("admin", "product-manager"), deleteProduct);

module.exports = router;
