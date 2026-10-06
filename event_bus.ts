export interface DomainEvent {

  eventId: string;

  eventType: string;

  entityId: string;

  timestamp: Date;

  payload: any;

}
