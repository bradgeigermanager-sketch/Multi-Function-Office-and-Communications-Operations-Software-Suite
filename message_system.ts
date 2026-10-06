export interface Message {
  id: string;

  channel:
    | "phone"
    | "email"
    | "sms"
    | "chat"
    | "note";

  senderId: string;

  content: string;

  timestamp: Date;
}
