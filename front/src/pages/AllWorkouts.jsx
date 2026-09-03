import { useEffect, useState } from "react";
import { getAllWorkouts, deleteWorkout } from "../api/workouts";
import WorkoutCard from "../components/WorkoutCard";

function AllWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadWorkouts = async () => {
    try {
      setLoading(true);
      const data = await getAllWorkouts();
      setWorkouts(data);
      setError("");
    } catch (err) {
      setError("שגיאה בטעינת האימונים מהשרת");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteWorkout(id);
      setWorkouts((prev) => prev.filter((w) => w._id !== id));
    } catch (err) {
      alert("שגיאה במחיקת האימון");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-display text-4xl tracking-wide text-portal drop-shadow-[0_0_10px_rgba(151,206,76,0.6)] mb-6">
        כל האימונים
      </h1>

      {loading && <p className="text-cable">טוען אימונים מממד אחר...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && workouts.length === 0 && (
        <p className="text-white/60">אין אימונים עדיין. הוסיפו אימון חדש!</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard key={workout._id} workout={workout} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default AllWorkouts;
