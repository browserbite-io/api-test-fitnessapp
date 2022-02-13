import { Goal } from "../goal/Goal";
import { Location } from "../location/Location";
import { Tip } from "../tip/Tip";
import { WorkoutDay } from "../workoutDay/WorkoutDay";

export type WorkoutPlan = {
  createdAt: Date;
  description: string | null;
  goal?: Goal | null;
  id: string;
  image: string | null;
  location?: Location | null;
  name: string | null;
  tips?: Array<Tip>;
  updatedAt: Date;
  video: string | null;
  workoutDays?: Array<WorkoutDay>;
};
