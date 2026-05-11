import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoute.js";
import authRouter2 from "./routes/authRoute2.js";
import mongoose from "mongoose";
import sales from "./routes/sales.js";
import dotenv from "dotenv";
// import aichat from "./routes/aichat.js";
dotenv.config();
const app = express();

app.use(cors({
  origin: "https://bizpilot-solup.netlify.app",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());


//mongos
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connecteddb"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend is running. Send a POST request to /login.",
    });
});


app.use(authRouter);
app.use(authRouter2);
app.use(sales);
// app.use(aichat);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});