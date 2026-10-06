export interface Communication {

  id: string;

  organizationId: string;

  channel:
    | "call"
    | "email"
    | "sms"
    | "chat"
    | "meeting";

  direction:
    | "inbound"
    | "outbound";

  contactId?: string;

  companyId?: string;

  projectId?: string;

  opportunityId?: string;

  subject?: string;

  status:
    | "queued"
    | "sent"
    | "delivered"
    | "read"
    | "completed"
    | "failed";

  startedAt: Date;

  endedAt?: Date;

  createdBy: string;
}
