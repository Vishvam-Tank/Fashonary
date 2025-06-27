const express = require("express");
const router = express.Router();
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.get("/admin-only", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.id}` });
});

router.get("/any-user", protect, (req, res) => {
  res.json({ message: `Hello ${req.user.role}, you're logged in!` });
});

module.exports = router;
