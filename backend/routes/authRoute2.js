import express from "express";
import User from "../shema/model.js";
const router = express.Router();

router.post("/signup", async (req, res) => {

  const { name, password, confirmpassword } = req.body;

  if(password !== confirmpassword){
    return res.status(400).json({
      message:"Passwords do not match"
    })
  }

  try {

    const newUser = new User({
      name,
      password
    });

    await newUser.save();

    res.json({
      success:true,
      message:"User created"
    });

  } catch(error){

    console.log(error);

    res.status(500).json({
      message:"Error saving user"
    })

  }

});

export default router;