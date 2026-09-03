import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllWorkouts from "./pages/AllWorkouts";
import AddWorkout from "./pages/AddWorkout";
import SearchWorkouts from "./pages/SearchWorkouts";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/all-workouts" replace />} />
        <Route path="/all-workouts" element={<AllWorkouts />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/search-workouts" element={<SearchWorkouts />} />
      </Routes>
    </div>
  );
}

export default App;
