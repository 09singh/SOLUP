import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
   
    const { name, password } = req.body;
     const pass ="abc123";
    console.log("Login data received:", { name, password });
    if (pass === password) {
        res.json({
            success: true,
            message: "Login data received",
            user: { name },
        });
    }
    else {
        res.json({
            message:"incorrect password",
        })
    }
});
 

export default router;