import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

import mlRoutes from "./routes/mlRoutes.js";


// Test route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Use ML route
app.use("/api/ml", mlRoutes);

// Routes
import chatbotRoutes from "./routes/chatbot.js";
import resultRoutes from "./routes/results.js";
import clickRoutes from "./routes/clicks.js";

app.use("/api/chatbot", chatbotRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/clicks", clickRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
