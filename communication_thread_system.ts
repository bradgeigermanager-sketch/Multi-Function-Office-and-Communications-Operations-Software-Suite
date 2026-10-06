export interface CommunicationThread {
  id: string;

  entityType:
    | "contact"
    | "project"
    | "opportunity"
    | "task";

  entityId: string;

  messages: Message[];

  lastActivityAt: Date;
}
