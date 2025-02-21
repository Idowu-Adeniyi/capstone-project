const WorkLog = require("../models/WorkLog");

exports.createWorkLog = async (req, res) => {
  try {
    const workLog = new WorkLog({ ...req.body, user: req.user.id });
    await workLog.save();
    res.status(201).json(workLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUserWorkLogs = async (req, res) => {
  const logs = await WorkLog.find({ user: req.user.id });
  res.json(logs);
};

exports.getAllWorkLogs = async (req, res) => {
  const logs = await WorkLog.find().populate("user", "name email");
  res.json(logs);
};
