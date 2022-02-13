import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WorkoutPlanWhereInput = {
  description?: StringNullableFilter;
  goal?: GoalWhereUniqueInput;
  id?: StringFilter;
  image?: StringNullableFilter;
  location?: LocationWhereUniqueInput;
  name?: StringNullableFilter;
  video?: StringNullableFilter;
};
