const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { restrictTo } = require("../middleware/roleMiddleware");

//ALL USERS (Free + Premium + Admin)
router.get("/free-model", protect, (req, res) => {
  res.json({
    message: "Free AI model accessed",
    user: req.user
  });
});

//PREMIUM + ADMIN ONLY
router.post("/premium-model", protect, restrictTo("Premium_User", "Admin"), (req, res) => {
  res.json({
    message: "Premium AI model accessed"
  });
});

// ADMIN ONLY
router.delete("/purge-cache", protect, restrictTo("Admin"), (req, res) => {
  res.json({
    message: "Cache cleared by admin"
  });
});

module.exports = router;