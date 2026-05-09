import fetch from "node-fetch";
import express from "express";

const router = express.Router();
const API_KEY = "AIzaSyCcpZ6DlWffQY8oescQl39q59RC-fNoTtQ";

router.get("/aichat", async (req, res) => {
  try {

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: "Explain MERN stack" }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(data);

    res.json(data);

  } catch (error) {
    console.error("Error fetching AI response:", error);
    res.status(500).json({ message: "Error fetching AI response" });
  }
});

export default router;