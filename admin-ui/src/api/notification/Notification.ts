import { Goal } from "../goal/Goal";
import { Location } from "../location/Location";

export type Notification = {
  createdAt: Date;
  day: number | null;
  destination?: "NUTRITIONPLAN" | "WORKOUTPLAN" | null;
  goal?: Goal | null;
  id: string;
  location?: Location | null;
  text: string | null;
  updatedAt: Date;
};
