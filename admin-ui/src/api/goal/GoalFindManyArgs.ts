import { GoalWhereInput } from "./GoalWhereInput";
import { GoalOrderByInput } from "./GoalOrderByInput";

export type GoalFindManyArgs = {
  where?: GoalWhereInput;
  orderBy?: GoalOrderByInput;
  skip?: number;
  take?: number;
};
