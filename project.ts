export interface Project {

  id: string;

  organizationId: string;

  name: string;

  description?: string;

  ownerId: string;

  status:
    | "planning"
    | "active"
    | "on_hold"
    | "completed"
    | "cancelled";

  startDate?: Date;

  targetCompletionDate?: Date;

  budget?: number;

  actualCost?: number;
}
