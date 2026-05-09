import express from "express";
import Sales from "../shema/sales.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

router.post("/management/sales", async (req, res) => {
  try {

    const token = req.headers.authorization?.split(" ")[1];
    console.log("Token received:", token);
      console.log(req.headers);
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
   
    const decoded = jwt.verify(token, JWT_SECRET);

    const newSales = new Sales({
      userId: decoded.userId,
      businessType: req.body.businessType,
      primaryContact: req.body.primaryContact,
      companyName: req.body.companyName,
      email: req.body.email,
      phone: req.body.phone,
      language: req.body.language,
    });

    await newSales.save();

    res.json({
      message: "Sales data saved",
      data: newSales
    });

  } catch (error) {
    console.error("Error saving sales data:", error);
    res.status(500).json({ message: "Error saving data" });
  }
});

export default router;