import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkoutPlanWhereUniqueInput } from "../workoutPlan/WorkoutPlanWhereUniqueInput";

export type WorkoutDayWhereInput = {
  day?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  workoutPlan?: WorkoutPlanWhereUniqueInput;
};
