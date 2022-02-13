import { WorkoutPlanWhereUniqueInput } from "../workoutPlan/WorkoutPlanWhereUniqueInput";

export type WorkoutDayUpdateInput = {
  day?: string | null;
  description?: string | null;
  workoutPlan?: WorkoutPlanWhereUniqueInput | null;
};
