import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NutritionPlanWhereUniqueInput } from "../nutritionPlan/NutritionPlanWhereUniqueInput";
import { WorkoutPlanWhereUniqueInput } from "../workoutPlan/WorkoutPlanWhereUniqueInput";

export type TipWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  nutritionPlan?: NutritionPlanWhereUniqueInput;
  video?: StringNullableFilter;
  workoutPlan?: WorkoutPlanWhereUniqueInput;
};
