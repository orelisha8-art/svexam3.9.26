const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

// GET /workouts - מחזיר את כל האימונים
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: "שגיאה בטעינת האימונים" });
  }
});

// GET /workouts/search?name= - מחזיר אימונים שהשם שלהם כולל את הערך שנשלח
router.get("/search", async (req, res) => {
  try {
    const { name = "" } = req.query;
    const workouts = await Workout.find({
      name: { $regex: name, $options: "i" },
    }).sort({ createdAt: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: "שגיאה בחיפוש אימונים" });
  }
});

// POST /workouts/generate - יצירת תיאור אימון אוטומטית באמצעות Vercel AI Gateway
router.post("/generate", async (req, res) => {
  try {
    const { name, muscleGroup } = req.body;

    if (!name || !muscleGroup) {
      return res.status(400).json({ error: "יש לספק name ו-muscleGroup" });
    }

    const apiKey = process.env.AI_GATEWAY_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "חסר מפתח AI_GATEWAY_API_KEY בשרת" });
    }

    const prompt = `אתה מאמן כושר מקצועי. צור תיאור קצר (עד 200 תווים) לאימון בשם "${name}" המתמקד בקבוצת השרירים "${muscleGroup}". החזר אך ורק JSON תקין בפורמט הבא, ללא טקסט נוסף: {"description": "..."}`;

    const response = await fetch("https://ai-gateway.vercel.sh/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI Gateway error:", errText);
      return res.status(502).json({ error: "שגיאה בקריאה ל-AI Gateway" });
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content || "{}";

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (parseErr) {
      return res.status(502).json({ error: "המודל החזיר פורמט לא תקין" });
    }

    res.json({ description: parsed.description || "" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "שגיאה ביצירת תיאור באמצעות AI" });
  }
});

// POST /workouts - מוסיף אימון חדש
router.post("/", async (req, res) => {
  try {
    const { name, muscleGroup, description } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "שם האימון הוא שדה חובה" });
    }
    if (name.trim().length > 20) {
      return res.status(400).json({ error: "שם האימון יכול להכיל עד 20 תווים" });
    }
    if (!muscleGroup || !muscleGroup.trim()) {
      return res.status(400).json({ error: "קבוצת השרירים היא שדה חובה" });
    }
    if (!description || !description.trim()) {
      return res.status(400).json({ error: "תיאור האימון הוא שדה חובה" });
    }
    if (description.length > 200) {
      return res.status(400).json({ error: "תיאור האימון יכול להכיל עד 200 תווים" });
    }

    const workout = new Workout({ name, muscleGroup, description });
    const saved = await workout.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "שגיאה בהוספת האימון" });
  }
});

// DELETE /workouts/:id - מוחק אימון לפי id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Workout.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "האימון לא נמצא" });
    }
    res.json({ message: "האימון נמחק בהצלחה", id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: "שגיאה במחיקת האימון" });
  }
});

module.exports = router;
