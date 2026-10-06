export interface WorkflowAction {
  actionType:
    | "create_task"
    | "assign_owner"
    | "create_project"
    | "send_email"
    | "send_sms"
    | "schedule_call"
    | "assign_user"
    | "update_status"
    | "webhook"
    | "create_opportunity";
  

  configuration: Record<string, any>;
}
