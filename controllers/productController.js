const Product = require("../models/Product");

// POST /api/products
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, size, color, stock, images } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      size,
      color,
      stock,
      images,
      createdBy: req.user.id,
    });

    await product.save();

    res.status(201).json({ message: "Product created", product });
  } catch (err) {
    console.error("Product Creation Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    console.error("Get Products Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
};
