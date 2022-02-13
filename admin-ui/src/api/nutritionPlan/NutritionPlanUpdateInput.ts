import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";

export type NutritionPlanUpdateInput = {
  description?: string | null;
  goal?: GoalWhereUniqueInput | null;
  image?: string | null;
  name?: string | null;
  shoppingList?: string | null;
  video?: string | null;
};
