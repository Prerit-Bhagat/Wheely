import express from "express";
import { User } from "../models/models.js";
import dotenv from "dotenv";

dotenv.config();
import { authMiddleware } from "../middlewares/authmiddleware.js";
import { generateToken } from "../utils/generatetoken.js";

const route = express.Router();

// Cookie Options
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  // LAx for testing
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

// Signup
route.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (await User.findOne({ email })) {
      return res.status(409).json({ message: "Email already taken" });
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user);

    return res
      .status(200)
      .cookie("token", token, cookieOptions)
      .json({
        message: "User created successfully",
        user: { name: user.name, email: user.email, password: user.password },
      });
  } catch (error) {
    console.log("Signup error:\n", error);
    res.status(500).json({ message: "Error during signup" });
  }
});

// Login
route.post("/auth/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    console.log("Signin request:", req.body);
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    console.log("asas ", req.body);
    const token = generateToken(user);
    console.log("Signin request:", req.body);
    return res
      .status(200)
      .cookie("token", token, cookieOptions)
      .json({
        message: "Login successful",
        user: { email: user.email, password: user.password },
      });
  } catch (error) {
    console.log("Signin error:", error);
    res.status(500).json({ message: "Error during signin" });
  }
});

// Logout
route.post("/auth/logout", authMiddleware, (req, res) => {
  return res.status(200).clearCookie("token", cookieOptions).json({
    message: "User logged out successfully",
  });
});

// Check Login
route.get("/auth/checkLogin", authMiddleware, (req, res) => {
  return res.status(200).json({ message: "User is already logged in" });
});

// Get User Details
route.get("/auth/details", authMiddleware, async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).select("-_id");
  if (!user) return res.status(404).json({ message: "User not found" });

  return res.status(200).json({ user });
});

// Global Error Handler
route.use((err, req, res, next) => {
  console.log("Inside global error handler:", err);
  return res.status(500).json({ message: "Internal Server Error" });
});

export default route;
