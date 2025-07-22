// server.js

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import route from "./Routes/authroutes.js";
import { ConnectDb } from "./db/db.js";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Use environment variables
const PORT = process.env.PORT || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// Middleware
app.use(cors({ origin: FRONTEND_ORIGIN, credentials: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", route);

// Start the server after DB connects
ConnectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.error("Failed to connect and start the server.");
  });
