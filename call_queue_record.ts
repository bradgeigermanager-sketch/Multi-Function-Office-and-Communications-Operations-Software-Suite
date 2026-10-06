export interface CallQueueRecord {
  id: string;

  contactId: string;

  phoneNumber: string;

  callType:
    | "outbound"
    | "inbound"
    | "callback";

  queueStatus:
    | "waiting"
    | "dialing"
    | "connected"
    | "completed"
    | "failed";

  assignedAgent?: string;

  attemptNumber: number;

  lastAttemptAt?: Date;

  disposition?:
    | "no_answer"
    | "voicemail"
    | "busy"
    | "interested"
    | "not_interested"
    | "callback_requested";

  nextFollowup?: Date;
}
