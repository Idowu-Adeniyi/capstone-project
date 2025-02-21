const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();
router.get("/", authMiddleware, roleMiddleware(["admin"]), getAllUsers);

module.exports = router;
