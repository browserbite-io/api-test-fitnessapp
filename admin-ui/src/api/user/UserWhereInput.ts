import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  armSize?: FloatNullableFilter;
  bodytype?: "ectomorph" | "mesomorph" | "endomorph";
  chestSize?: FloatNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "male" | "Female";
  goal?: GoalWhereUniqueInput;
  hipSize?: FloatNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  legSize?: FloatNullableFilter;
  location?: LocationWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  username?: StringFilter;
};
