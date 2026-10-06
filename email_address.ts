export interface EmailAddress {

  id: string;

  email: string;

  label:
    | "work"
    | "personal";

  isPrimary: boolean;

}
