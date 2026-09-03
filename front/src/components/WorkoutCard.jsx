import { Trash2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";

function WorkoutCard({ workout, onDelete }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{workout.name}</CardTitle>
        <span className="inline-block w-fit text-xs font-bold uppercase tracking-widest text-space bg-cable px-2 py-1 rounded-full">
          {workout.muscleGroup}
        </span>
      </CardHeader>
      <CardContent>
        {workout.description && (
          <p className="text-sm text-white/70">{workout.description}</p>
        )}
        {onDelete && (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(workout._id)}
            className="self-start"
          >
            <Trash2 className="size-4" />
            מחיקת אימון
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default WorkoutCard;
