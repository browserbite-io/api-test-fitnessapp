import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  day?: SortOrder;
  destination?: SortOrder;
  goalId?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
