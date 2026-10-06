export interface Notification {

  id: string;

  userId: string;

  title: string;

  message: string;

  category:
   | "task"
   | "call"
   | "project"
   | "system";

  read: boolean;

}
