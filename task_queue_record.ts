export interface Task {
  id: string;

  title: string;

  description: string;

  assignedTo?: string;

  projectId?: string;

  relatedContactId?: string;

  priority:
    | "critical"
    | "high"
    | "medium"
    | "low";

  status:
    | "backlog"
    | "ready"
    | "active"
    | "blocked"
    | "review"
    | "done";

  estimatedHours?: number;

  actualHours?: number;

  startDate?: Date;

  dueDate?: Date;
}
