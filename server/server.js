import express from "express";
import http from "http";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./lib/db.js";

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/status", (req, res) => res.send("Server is live."))

// Connect to MONGODB
await connectDB();

const PORT = process.env.PROT || 5000;
server.listen(PORT, () => console.log("Server is running on PORT:" + PORT));