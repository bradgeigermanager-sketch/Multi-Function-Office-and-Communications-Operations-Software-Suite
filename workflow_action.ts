export interface WorkflowAction {
  actionType:
    | "create_task"
    | "send_email"
    | "send_sms"
    | "schedule_call"
    | "assign_user"
    | "update_status";

  configuration: Record<string, any>;
}
