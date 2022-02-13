import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "text";

export const NotificationTitle = (record: TNotification): string => {
  return record.text || record.id;
};
