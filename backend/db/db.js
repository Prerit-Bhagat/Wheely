// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
const DB_NAME = "CarWebsite";

const ConnectDb = async () => {
  try {
    await mongoose.connect(`${MONGODB_CONNECTION_URL}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected!");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

export { ConnectDb };
