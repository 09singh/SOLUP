import express from "express";
import User from "../routes/model.js"
const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, password, confirmpassword } = req.body;
    console.log("signup data reciverd:", { name, password, confirmpassword });
    try {
        const newUser = new User({
            name: name,
            passwoard: password
        })
        await newUser.save();

        res.json({
            success: true,
            message: "data saverd",
            user: { name },
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error saving user"
        })
    }
})

export default router;