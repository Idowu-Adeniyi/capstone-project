const express = require("express");
const {
  createWorkLog,
  getUserWorkLogs,
  getAllWorkLogs,
} = require("../controllers/workLogController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();
router.post("/", authMiddleware, createWorkLog);
router.get("/user", authMiddleware, getUserWorkLogs);
router.get("/all", authMiddleware, roleMiddleware(["admin"]), getAllWorkLogs);

module.exports = router;
