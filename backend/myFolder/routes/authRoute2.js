import express from "express";
import User from "../shema/model.js"
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const name = req.body.name?.trim();
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if (!name || !password || !confirmpassword) {
            return res.json({ success: false, message: "all fields are required" });
        }

        if (password !== confirmpassword) {
            return res.json({ success: false, message: "passwords do not match" });
        }

        const existingUser = await User.findOne({ name });

        if (existingUser) {
            return res.json({ success: false, message: "user already exists" });
        }

        const newUser = new User({
            name,
            password
        });

        await newUser.save();

        return res.json({
            success: true,
            message: "data saved",
            user: { name },
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error saving user"
        });
    }
});

export default router;