import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Dumbbell, Target, FileText } from "lucide-react";
import { addWorkout, generateWorkoutDescription } from "../api/workouts";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import GlitchHeading from "../components/decor/GlitchHeading";

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
      <GlitchHeading className="font-display text-4xl tracking-wide text-portal drop-shadow-[0_0_10px_rgba(151,206,76,0.6)] mb-6">
        הוספת אימון
      </GlitchHeading>

      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label className="flex items-center gap-1.5">
              <Dumbbell className="size-3.5" />
              שם האימון
            </Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              placeholder="לדוגמה: סקוואט"
            />
          </div>

          <div>
            <Label className="flex items-center gap-1.5">
              <Target className="size-3.5" />
              קבוצת שרירים
            </Label>
            <Input
              type="text"
              value={muscleGroup}
              onChange={(e) => setMuscleGroup(e.target.value)}
              placeholder="לדוגמה: רגליים"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <Label className="mb-0 flex items-center gap-1.5">
                <FileText className="size-3.5" />
                תיאור
              </Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleGenerate}
                disabled={generating}
              >
                <Sparkles className="size-4" />
                {generating ? "יוצר תיאור..." : "יצירת תיאור עם AI"}
              </Button>
            </div>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={200}
              rows={4}
              placeholder="תיאור קצר של האימון"
            />
            <span className="text-xs text-white/40">{description.length}/200</span>
          </div>

          <Button type="submit" disabled={submitting} size="lg">
            {submitting ? "מוסיף..." : "הוספת אימון"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddWorkout;
