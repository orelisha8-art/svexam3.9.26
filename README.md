# 🏋️ Workout Tracker App

אפליקציית Fullstack לניהול אימונים – Backend ב-Express + MongoDB, ו-Frontend ב-React (Vite) + Tailwind CSS.

## 📁 מבנה הפרויקט

```
back/   - שרת Express + Mongoose (MongoDB)
front/  - אפליקציית React (Vite) + Tailwind CSS + React Router
```

## ⚙️ טכנולוגיות

- **Backend:** Node.js, Express, Mongoose, MongoDB Atlas
- **Frontend:** React, Vite, Tailwind CSS, React Router, Axios
- **AI:** Vercel AI Gateway ליצירת תיאור אימון אוטומטי

## 🚀 הרצה מקומית

### Backend

```bash
cd back
npm install
# יש ליצור קובץ .env לפי .env.example ולמלא MONGO_URI ו-AI_GATEWAY_API_KEY
npm run dev
```

השרת רץ כברירת מחדל בפורט `5000`.

### Frontend

```bash
cd front
npm install
# יש ליצור קובץ .env לפי .env.example ולהצביע ל-VITE_API_URL של השרת
npm run dev
```

## 🔌 API Endpoints

| Method | Route                     | תיאור                                   |
| ------ | -------------------------- | ---------------------------------------- |
| GET    | `/workouts`                 | מחזיר את כל האימונים                     |
| GET    | `/workouts/search?name=`    | מחזיר אימונים לפי חיפוש בשם              |
| POST   | `/workouts`                 | מוסיף אימון חדש                          |
| DELETE | `/workouts/:id`             | מוחק אימון לפי מזהה                      |
| POST   | `/workouts/generate`        | יוצר תיאור אימון אוטומטי באמצעות AI      |

מבנה אימון: `name` (עד 20 תווים, חובה), `muscleGroup` (חובה), `description` (עד 200 תווים, חובה).

## 🖥️ דפי ה-Frontend

- `/all-workouts` – הצגת כל האימונים עם אפשרות מחיקה.
- `/add-workout` – הוספת אימון חדש עם ולידציה, וכפתור ליצירת תיאור אוטומטי באמצעות AI.
- `/search-workouts` – חיפוש אימונים בזמן אמת לפי שם, ללא כפתור.

## 🤖 שימוש ב-AI

נעזרתי בכלי AI (GitHub Copilot) לצורך:

- כתיבת השלד הראשוני של קומפוננטות React ושל ה-routes בשרת (Express).
- ניסוח הקריאה ל-Vercel AI Gateway ב-endpoint `/workouts/generate`.

כל קטעי הקוד נבדקו והובנו לפני ההגשה, ובוצעו התאמות (ולידציות, מבנה נתונים, טיפול בשגיאות) לפי דרישות המטלה.

## ☁️ Deployment

- ה-Backend וה-Frontend מועלים בנפרד ל-Vercel (או פלטפורמה תואמת ל-Node עבור ה-Backend).
- יש להגדיר את משתני הסביבה (`MONGO_URI`, `AI_GATEWAY_API_KEY` בשרת, ו-`VITE_API_URL` בפרונט) בהגדרות הפרויקט ב-Vercel.
