import { NavLink } from "react-router-dom";

const linkBase =
  "px-4 py-2 rounded-md text-sm font-medium transition-colors";
const linkActive = "bg-indigo-600 text-white";
const linkInactive = "text-gray-700 hover:bg-gray-100";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-xl font-bold text-indigo-600">🏋️ Workout Tracker</span>
        <div className="flex gap-2">
          <NavLink
            to="/all-workouts"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            All Workouts
          </NavLink>
          <NavLink
            to="/add-workout"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Add Workout
          </NavLink>
          <NavLink
            to="/search-workouts"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
