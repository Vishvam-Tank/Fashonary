const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    size: {
      type: [String], // ["S", "M", "L"]
      default: [],
    },
    color: {
      type: [String], // ["Black", "Beige"]
      default: [],
    },
    stock: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String], // image URLs
      default: [],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
