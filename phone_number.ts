export interface PhoneNumber {

  id: string;

  label:
    | "mobile"
    | "direct"
    | "office"
    | "home"
    | "fax";

  number: string;

  extension?: string;

  isPrimary: boolean;

}
