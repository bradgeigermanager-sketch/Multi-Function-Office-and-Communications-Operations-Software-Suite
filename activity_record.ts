export interface Activity {

  id: string;

  contactId?: string;

  companyId?: string;

  activityType:
    | "call"
    | "email"
    | "sms"
    | "meeting"
    | "note"
    | "task"
    | "opportunity";

  title: string;

  description?: string;

  timestamp: Date;

  createdBy: string;
}
