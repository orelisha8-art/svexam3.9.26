import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addWorkout, generateWorkoutDescription } from "../api/workouts";

function AddWorkout() {
  const [name, setName] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [description, setDescription] = useState("");
  const [generating, setGenerating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    if (!name.trim()) return "שם האימון הוא שדה חובה (לפחות תו אחד)";
    if (name.trim().length > 20) return "שם האימון יכול להכיל עד 20 תווים";
    if (!muscleGroup.trim()) return "קבוצת השרירים היא שדה חובה (לפחות תו אחד)";
    if (description.length > 200) return "תיאור האימון יכול להכיל עד 200 תווים";
    if (!description.trim()) return "תיאור האימון הוא שדה חובה";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      setSubmitting(true);
      await addWorkout({ name: name.trim(), muscleGroup: muscleGroup.trim(), description: description.trim() });
      navigate("/all-workouts");
    } catch (err) {
      alert(err?.response?.data?.error || "שגיאה בהוספת האימון");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGenerate = async () => {
    if (!name.trim() || !muscleGroup.trim()) {
      alert("יש למלא שם אימון וקבוצת שרירים לפני יצירת תיאור עם AI");
      return;
    }
    try {
      setGenerating(true);
      const result = await generateWorkoutDescription({
        name: name.trim(),
        muscleGroup: muscleGroup.trim(),
      });
      setDescription((result.description || "").slice(0, 200));
    } catch (err) {
      alert(err?.response?.data?.error || "שגיאה ביצירת תיאור באמצעות AI");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add Workout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Workout Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. Squats"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Muscle Group</label>
          <input
            type="text"
            value={muscleGroup}
            onChange={(e) => setMuscleGroup(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. Legs"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={generating}
              className="text-xs font-medium text-indigo-600 hover:text-indigo-800 disabled:opacity-50"
            >
              {generating ? "יוצר תיאור..." : "✨ Generate with AI"}
            </button>
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            rows={4}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Short description of the workout"
          />
          <span className="text-xs text-gray-400">{description.length}/200</span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md px-4 py-2 disabled:opacity-50"
        >
          {submitting ? "מוסיף..." : "Add Workout"}
        </button>
      </form>
    </div>
  );
}

export default AddWorkout;
