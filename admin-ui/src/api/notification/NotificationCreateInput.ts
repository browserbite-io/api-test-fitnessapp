import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type NotificationCreateInput = {
  day?: number | null;
  destination?: "NUTRITIONPLAN" | "WORKOUTPLAN" | null;
  goal?: GoalWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  text?: string | null;
};
