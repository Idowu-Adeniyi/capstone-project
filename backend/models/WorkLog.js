const mongoose = require("mongoose");

const workLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  hoursWorked: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("WorkLog", workLogSchema);
