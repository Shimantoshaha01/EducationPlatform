import express from "express";
import axios from "axios";

const router = express.Router();

// Test connection to ML server
router.get("/test-ml", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/");
        res.json({
            backend: "connected",
            ml_server: response.data
        });
    } catch (err) {
        res.status(500).json({
            error: "ML Server not reachable",
            details: err.message
        });
    }
});

// Example ML POST route
router.post("/predict", async (req, res) => {
    try {
        const { marks } = req.body;

        const response = await axios.post(
            "http://127.0.0.1:8000/weak-subject",
            { marks }
        );

        res.json(response.data);
    } catch (err) {
        res.status(500).json({
            error: "ML Prediction Failed",
            details: err.message
        });
    }
});

export default router;
