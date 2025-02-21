const mongoose = require("mongoose");
const workLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  clockInTime: Date,
  clockOutTime: Date,
  totalHours: Number,
  note: String,
});
module.exports = mongoose.model("WorkLog", workLogSchema);
