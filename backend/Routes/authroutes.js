import express from "express";
import { User } from "../models/usermodel.js";

import { signUpValidation } from "../middlewares/signup.validation.middleware.js";
import { signInValidation } from "../middlewares/signin.validation.middleware.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { generateToken } from "./utils/generateToken.js";

const route = express.Router();

//  Cookie options for localhost (secure: false, sameSite: "Lax")
const cookieOptions = {
  httpOnly: true,
  secure: false, // Use false on localhost
  sameSite: "Lax", // Use Lax for localhost dev
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// SIGNUP ROUTE
route.post("/signup", signUpValidation, async (req, res) => {
  try {
    const { username, fullName, email, password, phoneNumber } = req.body;

    if (await User.findOne({ username })) {
      return res.status(409).json({ message: "Username already taken" });
    }
    if (await User.findOne({ email })) {
      return res.status(409).json({ message: "Email already taken" });
    }
    if (await User.findOne({ phoneNumber })) {
      return res.status(409).json({ message: "PhoneNumber already taken" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -name -phoneNumber"
    );

    if (!createdUser) {
      return res.status(500).json({ message: "User registration failed" });
    }

    const token = generateToken(createdUser);

    return res.status(200).cookie("token", token, cookieOptions).json({
      message: "User created successfully",
      user: createdUser,
    });
  } catch (error) {
    console.log("Signup error:\n", error);
    res.status(500).json({ error: error.name, message: "Error during signup" });
  }
});

// SIGNIN ROUTE
route.post("/signin", signInValidation, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isCorrect = await user.isPasswordCorrect(password);
    if (!isCorrect)
      return res.status(401).json({ message: "Invalid credentials" });

    const loggedInUser = await User.findById(user._id).select(
      "-password -phoneNumber"
    );
    const token = generateToken(loggedInUser);

    return res.status(200).cookie("token", token, cookieOptions).json({
      message: "Login successful",
      user: loggedInUser,
    });
  } catch (error) {
    console.log("Signin error:", error);
    res.status(500).json({ error: error.name, message: "Error during signin" });
  }
});

// LOGOUT ROUTE
route.post("/logout", authMiddleware, (req, res) => {
  return res.status(200).clearCookie("token", cookieOptions).json({
    message: "User logged out successfully",
  });
});

//  CHECK LOGIN ROUTE
route.get("/checkLogin", authMiddleware, (req, res) => {
  // console.log("working");
  return res.status(200).json({ message: "User is already logged in" });
});

// GET USER NAME
route.get("/name", authMiddleware, async (req, res) => {
  const name = await User.findOne({ email: req.body.email }).select(
    "fullName -_id"
  );
  return res.status(200).json({ fullName: name });
});

// GET USER DETAILS
route.get("/details", authMiddleware, async (req, res) => {
  const details = await User.findOne({ email: req.body.email }).select(
    "-password -_id"
  );
  return res.status(200).json({ details });
});

// GLOBAL ERROR HANDLER
route.use((err, req, res, next) => {
  console.log("Inside global error handler:", err);
  return res.status(500).json({
    message: "Internal Server Error",
  });
});

export default route;
