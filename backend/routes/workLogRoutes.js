import express from "express";
import {
  createWorkLog,
  getUserWorkLogs,
  getAllWorkLogs,
  getWorkHoursReport,
} from "../controllers/workLogController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createWorkLog);
router.get("/", protect, getUserWorkLogs);
router.get("/all", protect, authorize(["admin"]), getAllWorkLogs);
router.get("/report", protect, authorize(["admin"]), getWorkHoursReport);

export default router;
