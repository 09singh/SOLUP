import express from "express";
import authRouter from "./routes/authRoute.js";
import authRouter2 from "./routes/authRoute2.js";
import model from "./shema/model.js"
import mongoose from "mongoose";
import Sales from "./routes/sales.js";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const allowedOrigins = new Set(
    (process.env.CORS_ORIGINS || "http://localhost:5173,http://localhost:5174,http://localhost:5175,http://localhost:5176")
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
);

  
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (origin && allowedOrigins.has(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});

app.use(express.json());

//mongos
mongoose.connect(MONGODB_URI)
    .then(() => console.log("connecteddb"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend is running. Send a POST request to /login.",
    });
});

app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
    res.status(204).end();
});

app.use(authRouter);
app.use(authRouter2);
app.use(Sales);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
