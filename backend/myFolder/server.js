import express from "express";
import authRouter from "./routes/authRoute.js";
import authRouter2 from "./routes/authRoute2.js";
import model from "./routes/model.js"
import mongoose from "mongoose";
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

//mongos
mongoose.connect("mongodb://localhost:27017/")
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
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
