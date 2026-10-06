export interface QueueItem {
  id: string;
  type:
    | "call"
    | "task"
    | "email"
    | "sms"
    | "meeting"
    | "approval"
    | "project";

  title: string;
  description?: string;

  ownerId?: string;
  teamId?: string;

  priority:
    | "critical"
    | "high"
    | "normal"
    | "low";

  status:
    | "queued"
    | "assigned"
    | "in_progress"
    | "waiting"
    | "completed"
    | "cancelled";

  dueDate?: Date;

  relatedContactId?: string;
  relatedProjectId?: string;
  relatedOpportunityId?: string;

  createdAt: Date;
  updatedAt: Date;
}
