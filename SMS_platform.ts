export interface SmsMessage {

  id: string;

  contactId: string;

  phoneNumber: string;

  direction:
    | "inbound"
    | "outbound";

  message: string;

  delivered: boolean;

  read?: boolean;
}
