export interface WorkflowTrigger {
  id: string;
  
  eventType: string;
  
  event:
    | "lead_created"
    | "call_completed"
    | "email_opened"
    | "task_finished"
    | "project_completed";

  sourceModule:
    | "crm"
    | "project"
    | "communications"
    | "support"
    | "system";


  workflowId: string;
}
