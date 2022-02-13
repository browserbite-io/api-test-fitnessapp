import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  meal?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
};
