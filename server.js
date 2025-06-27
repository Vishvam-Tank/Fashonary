const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Fashonary Backend is running ✅");
});


const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);


const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);




// Connect MongoDB & Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)))
  .catch((err) => console.log(err));



