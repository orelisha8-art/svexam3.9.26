import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
});

export const getAllWorkouts = () => api.get("/workouts").then((res) => res.data);

export const searchWorkouts = (name) =>
  api.get("/workouts/search", { params: { name } }).then((res) => res.data);

export const addWorkout = (workout) =>
  api.post("/workouts", workout).then((res) => res.data);

export const deleteWorkout = (id) =>
  api.delete(`/workouts/${id}`).then((res) => res.data);

export const generateWorkoutDescription = (data) =>
  api.post("/workouts/generate", data).then((res) => res.data);

export default api;
