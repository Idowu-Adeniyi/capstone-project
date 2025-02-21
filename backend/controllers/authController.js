import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (await User.findOne({ email }))
    return res.status(400).json({ message: "Email already in use." });

  const user = await User.create({ name, email, password, role });
  res
    .status(201)
    .json({
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, role: user.role },
    });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  res.json({
    token: generateToken(user._id),
    user: { id: user._id, name: user.name, role: user.role },
  });
};
