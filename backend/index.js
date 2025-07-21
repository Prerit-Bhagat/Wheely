import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import route from "./Routes/authroutes.js";
import { ConnectDb } from "./db/db.js"; // Import the DB connection
import cors from "cors";

const PORT = 4000;

const app = express();

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

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", route);
