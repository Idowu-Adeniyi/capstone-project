const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["User", "Admin"], default: "User" },
  ipLocation: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", userSchema);
