import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllWorkouts from "./pages/AllWorkouts";
import AddWorkout from "./pages/AddWorkout";
import SearchWorkouts from "./pages/SearchWorkouts";
import Starfield from "./components/decor/Starfield";
import Spaceship from "./components/decor/Spaceship";
import AlienBlob from "./components/decor/AlienBlob";
import TentacleCreature from "./components/decor/TentacleCreature";

function App() {
  return (
    <div className="min-h-screen">
      <Starfield />
      <div className="dimension-floor" />
      <div className="portal-ring w-[220px] h-[220px] -top-10 right-[15%]" />
      <div className="portal-ring w-[140px] h-[140px] top-1/3 -left-16" />
      <Spaceship className="floating-ship fixed top-16 -z-10 w-28 opacity-80 pointer-events-none hidden sm:block" />
      <AlienBlob className="floating-creature fixed bottom-6 left-4 -z-10 w-20 opacity-70 pointer-events-none hidden md:block" />
      <TentacleCreature className="floating-creature fixed top-24 right-4 -z-10 w-16 opacity-60 pointer-events-none hidden lg:block" />
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
