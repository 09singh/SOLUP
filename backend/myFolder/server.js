import express from "express";
import authRouter from "./routes/authRoute.js";

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});

app.use(express.json());

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

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
