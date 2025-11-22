import express from "express";
const router = express.Router();

// test route
router.get("/test", (req, res) => {
    res.json({ message: "Chatbot route working" });
});

export default router;
