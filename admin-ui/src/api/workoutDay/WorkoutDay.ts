import { Exercise } from "../exercise/Exercise";
import { WorkoutPlan } from "../workoutPlan/WorkoutPlan";

export type WorkoutDay = {
  createdAt: Date;
  day: string | null;
  description: string | null;
  exercises?: Array<Exercise>;
  id: string;
  updatedAt: Date;
  workoutPlan?: WorkoutPlan | null;
};
