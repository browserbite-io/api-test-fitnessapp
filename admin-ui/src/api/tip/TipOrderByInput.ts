import { SortOrder } from "../../util/SortOrder";

export type TipOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  nutritionPlanId?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
  workoutPlanId?: SortOrder;
};
