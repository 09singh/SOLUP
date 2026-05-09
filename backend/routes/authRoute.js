import express from "express";
import User from "../shema/model.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

      const user = await User.findOne({ name: name.trim() });
      console.log("Entered password:", password);
console.log("Database password:", user.passwoard);
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid username provided",
      });
    }

    if (user.passwoard !== password.trim()) {
      return res.json({
        success: false,
        message: "Invalid password provided",
      });
    }
 const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: "1h"});
    res.json({
      success: true,
      message: "Login successful",
      token: token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


export default router;