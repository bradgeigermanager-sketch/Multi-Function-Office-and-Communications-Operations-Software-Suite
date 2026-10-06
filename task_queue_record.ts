export interface Task {
  id: string;

  title: string;

  description: string;

  parentTaskId?: string;

  childTaskId?: string;

  assignedUserId?: string;

  projectId?: string;

  relatedContactId?: string;

  

  priority:
    | "critical"
    | "high"
    | "medium"
    | "low"
    | "periodic";

  status:
    | "backlog"
    | "not_started"
    | "ready"
    | "active"
    | "blocked"
    | "review"
    | "completed";

  estimatedHours?: number;

  actualHours?: number;

  startDate?: Date;

  dueDate?: Date;
}
