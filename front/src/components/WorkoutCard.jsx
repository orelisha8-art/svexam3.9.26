function WorkoutCard({ workout, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-gray-900">{workout.name}</h3>
      <span className="inline-block w-fit text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full">
        {workout.muscleGroup}
      </span>
      {workout.description && (
        <p className="text-sm text-gray-600">{workout.description}</p>
      )}
      {onDelete && (
        <button
          onClick={() => onDelete(workout._id)}
          className="mt-2 self-start bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
        >
          Delete Workout
        </button>
      )}
    </div>
  );
}

export default WorkoutCard;
