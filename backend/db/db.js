// db.js
import mongoose from "mongoose";

const MONGODB_CONNECTION_URL = "mongodb://localhost:27017";
const DB_NAME = "CaerWebsite";

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
