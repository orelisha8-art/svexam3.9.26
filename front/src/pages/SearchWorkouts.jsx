import { useEffect, useState } from "react";
import { searchWorkouts } from "../api/workouts";
import WorkoutCard from "../components/WorkoutCard";

function SearchWorkouts() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await searchWorkouts(query);
        setResults(data);
      } catch (err) {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Workouts</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="חפשו לפי שם אימון..."
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {loading && <p className="text-gray-500">מחפש...</p>}

      {!loading && results.length === 0 && query.trim() && (
        <p className="text-gray-500">לא נמצאו אימונים תואמים</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {results.map((workout) => (
          <WorkoutCard key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
}

export default SearchWorkouts;
