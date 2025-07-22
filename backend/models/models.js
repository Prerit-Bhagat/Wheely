import mongoose from "mongoose";
// models.js

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

export { User };
