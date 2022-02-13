import { WorkoutPlanWhereInput } from "./WorkoutPlanWhereInput";
import { WorkoutPlanOrderByInput } from "./WorkoutPlanOrderByInput";

export type WorkoutPlanFindManyArgs = {
  where?: WorkoutPlanWhereInput;
  orderBy?: WorkoutPlanOrderByInput;
  skip?: number;
  take?: number;
};
