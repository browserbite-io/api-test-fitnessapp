import { Goal } from "../goal/Goal";
import { Location } from "../location/Location";

export type User = {
  armSize: number | null;
  bodytype?: "ectomorph" | "mesomorph" | "endomorph" | null;
  chestSize: number | null;
  createdAt: Date;
  firstName: string | null;
  gender?: "male" | "Female" | null;
  goal?: Goal | null;
  hipSize: number | null;
  id: string;
  lastName: string | null;
  legSize: number | null;
  location?: Location | null;
  roles: Array<string>;
  startDate: Date | null;
  updatedAt: Date;
  username: string;
};
