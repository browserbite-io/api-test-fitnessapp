import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WorkoutPlanCreateInput = {
  description?: string | null;
  goal?: GoalWhereUniqueInput | null;
  image?: string | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  video?: string | null;
};
