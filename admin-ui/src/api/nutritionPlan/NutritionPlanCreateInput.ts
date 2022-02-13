import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";

export type NutritionPlanCreateInput = {
  description?: string | null;
  goal?: GoalWhereUniqueInput | null;
  image?: string | null;
  name?: string | null;
  shoppingList?: string | null;
  video?: string | null;
};
