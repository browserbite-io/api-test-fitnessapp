import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type UserCreateInput = {
  armSize?: number | null;
  bodytype?: "ectomorph" | "mesomorph" | "endomorph" | null;
  chestSize?: number | null;
  firstName?: string | null;
  gender?: "male" | "Female" | null;
  goal?: GoalWhereUniqueInput | null;
  hipSize?: number | null;
  lastName?: string | null;
  legSize?: number | null;
  location?: LocationWhereUniqueInput | null;
  password: string;
  roles: Array<string>;
  startDate?: Date | null;
  username: string;
};
