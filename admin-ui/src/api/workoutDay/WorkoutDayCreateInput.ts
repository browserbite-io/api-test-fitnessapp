import { WorkoutPlanWhereUniqueInput } from "../workoutPlan/WorkoutPlanWhereUniqueInput";

export type WorkoutDayCreateInput = {
  day?: string | null;
  description?: string | null;
  workoutPlan?: WorkoutPlanWhereUniqueInput | null;
};
