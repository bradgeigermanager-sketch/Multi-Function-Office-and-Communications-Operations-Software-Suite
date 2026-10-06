export interface WorkflowTrigger {
  id: string;

  event:
    | "lead_created"
    | "call_completed"
    | "email_opened"
    | "task_finished"
    | "project_completed";

  workflowId: string;
}
