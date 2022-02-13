import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  day?: IntNullableFilter;
  destination?: "NUTRITIONPLAN" | "WORKOUTPLAN";
  goal?: GoalWhereUniqueInput;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  text?: StringNullableFilter;
};
