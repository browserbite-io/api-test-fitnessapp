import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NutritionPhaseWhereInput = {
  description?: StringNullableFilter;
  fromDay?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tillDay?: IntNullableFilter;
};
