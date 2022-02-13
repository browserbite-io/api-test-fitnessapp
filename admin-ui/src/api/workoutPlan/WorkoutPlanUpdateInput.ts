import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WorkoutPlanUpdateInput = {
  description?: string | null;
  goal?: GoalWhereUniqueInput | null;
  image?: string | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  video?: string | null;
};
