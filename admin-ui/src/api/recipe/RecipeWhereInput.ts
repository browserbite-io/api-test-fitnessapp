import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecipeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  meal?: "Breakfast" | "Lunch" | "Dinner";
  name?: StringNullableFilter;
  video?: StringNullableFilter;
};
