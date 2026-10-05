const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running successfully");
});

app.get("/api/status", (req, res) => {
    res.json({
        message: "Frontend successfully connected to Backend",
        status: "Success",
        database: "Simulated Database"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});
