import express from "express";
import { register, login } from "../controllers/authController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js"; // Import middleware

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Example protected route (optional)
// router.get("/profile", protect, (req, res) => res.json(req.user));

// Example admin-only route (optional)
// router.get("/admin", protect, authorize("admin"), (req, res) => res.json({ message: "Admin access granted" }));

export default router;
