import { NotificationWhereInput } from "./NotificationWhereInput";
import { NotificationOrderByInput } from "./NotificationOrderByInput";

export type NotificationFindManyArgs = {
  where?: NotificationWhereInput;
  orderBy?: NotificationOrderByInput;
  skip?: number;
  take?: number;
};
