import express from "express";
import User from "../shema/model.js"
import jwt from "jsonwebtoken";
 import auth from "../middleware/auth.js";



const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

router.get("/management/sales", auth, (req,res)=>{
 res.json({message:"welcome", user:req.name});
});

router.post("/login", async (req, res) => {
    try {
        const name = req.body.name?.trim();
        const password = req.body.password;

        if (!name || !password) {
            return res.json({ success: false, message: "name and password are required" });
        }

        const user = await User.findOne({ name });

        if (!user) {
            return res.json({ success: false, message: "user not found" });
        }

        if (user.password === password) {
           const token = jwt.sign(
            { id: user._id }, 
            JWT_SECRET, 
            { expiresIn: "1d" }
            );

       return res.json({
        success: true,
        message: "login successful",
        token: token,
        user: { name },
      });
           
        }

        return res.json({ success: false, message: "password not match" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "login failed" });
    }
});
 

export default router;
