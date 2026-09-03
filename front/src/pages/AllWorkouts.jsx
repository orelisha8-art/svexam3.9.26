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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">All Workouts</h1>

      {loading && <p className="text-gray-500">טוען אימונים...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && workouts.length === 0 && (
        <p className="text-gray-500">אין אימונים עדיין. הוסיפו אימון חדש!</p>
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
