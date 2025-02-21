import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const user = await User.create({ name, email, password, role });
    if (user) {
      res.status(201).json({
        token: generateToken(user._id),
        user: { id: user._id, name: user.name, role: user.role },
      });
    } else {
      res.status(400).json({ message: "Invalid user data." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.json({
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};
