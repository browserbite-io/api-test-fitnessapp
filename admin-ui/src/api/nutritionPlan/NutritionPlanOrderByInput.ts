import { SortOrder } from "../../util/SortOrder";

export type NutritionPlanOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  goalId?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  shoppingList?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
};
