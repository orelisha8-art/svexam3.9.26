import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { searchWorkouts } from "../api/workouts";
import WorkoutCard from "../components/WorkoutCard";
import { Input } from "../components/ui/input";
import GlitchHeading from "../components/decor/GlitchHeading";

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
      <GlitchHeading className="font-display text-4xl tracking-wide text-portal drop-shadow-[0_0_10px_rgba(151,206,76,0.6)] mb-6">
        חיפוש אימונים
      </GlitchHeading>

      <div className="relative mb-6">
        <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-cable" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="חפשו לפי שם אימון..."
          className="pr-9"
        />
      </div>

      {loading && <p className="text-cable">מחפש בממדים מקבילים...</p>}

      {!loading && results.length === 0 && query.trim() && (
        <p className="text-white/60">לא נמצאו אימונים תואמים</p>
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
