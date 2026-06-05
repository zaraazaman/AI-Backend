const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["Admin", "Premium_User", "Free_User"],
    default: "Free_User"
  },

  refreshToken: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("User", userSchema);