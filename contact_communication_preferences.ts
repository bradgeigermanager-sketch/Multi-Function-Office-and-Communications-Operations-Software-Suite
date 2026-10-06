export interface CommunicationPreference {

  contactId: string;

  phoneAllowed: boolean;

  smsAllowed: boolean;

  emailAllowed: boolean;

  marketingAllowed: boolean;

  preferredChannel:
    | "phone"
    | "email"
    | "sms";

}
