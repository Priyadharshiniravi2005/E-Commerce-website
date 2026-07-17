import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Healthcheck
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route: AI Canine Advisor (Gemini)
  app.post("/api/gemini/advisor", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        return res.json({
          text: "Hi there! I'm Pawsome AI, your Canine Care & Breed Matchmaker Advisor. It looks like the `GEMINI_API_KEY` is not fully configured in your Secrets panel yet. Once configured, I will be able to analyze your home setup, recommend exact training routines, answer veterinary questions, and customize breed comparisons! For now, feel free to use my local mock advice or explore the breed matching quiz and puppy store! 🐾",
          warning: "API Key missing"
        });
      }

      // Initialize the official @google/genai SDK on the server-side
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = 
        "You are 'Pawsome AI', an expert canine coach, veterinary advisor, and breed matchmaker for the 'Dog Adoption & Breeder Marketplace' ecommerce app. " +
        "You help users make informed, ethical, and compassionate decisions about puppy buying, dog adoption, training schedules, diet plans, " +
        "houseproofing, vaccine schedules, and general breed temperaments. " +
        "Be incredibly friendly, patient, encouraging, and clear. Format your answers elegantly using Markdown list items, bullet points, and headers. " +
        "Always remind the user to consult with a licensed local veterinarian for urgent healthcare or prescription decisions.";

      const contents = [];

      // Append chat history if present
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          });
        }
      }

      // Append current user message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      // Query the official gemini-3.5-flash model
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: error.message || "An unexpected error occurred with Pawsome AI." });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
