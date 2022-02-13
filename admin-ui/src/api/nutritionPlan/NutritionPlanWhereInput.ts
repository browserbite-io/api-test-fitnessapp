import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type NutritionPlanWhereInput = {
  description?: StringNullableFilter;
  goal?: GoalWhereUniqueInput;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  shoppingList?: StringNullableFilter;
  video?: StringNullableFilter;
};
