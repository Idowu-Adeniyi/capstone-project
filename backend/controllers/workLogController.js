import WorkLog from "../models/WorkLog.js";

export const createWorkLog = async (req, res) => {
  const { date, hours, description } = req.body;
  const workLog = await WorkLog.create({
    user: req.user._id,
    date,
    hours,
    description,
  });
  res.status(201).json(workLog);
};

export const getUserWorkLogs = async (req, res) => {
  const logs = await WorkLog.find({ user: req.user._id }).sort("-date");
  res.json(logs);
};

export const getAllWorkLogs = async (req, res) => {
  const logs = await WorkLog.find().populate("user", "name").sort("-date");
  res.json(logs);
};

export const getWorkHoursReport = async (req, res) => {
  const report = await WorkLog.aggregate([
    { $group: { _id: "$user", totalHours: { $sum: "$hours" } } },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $project: { user: "$user.name", totalHours: 1 } },
  ]);
  res.json(report);
};
