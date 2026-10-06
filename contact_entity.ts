export interface Contact {

  id: string;

  organizationId: string;

  firstName: string;

  lastName: string;

  preferredName?: string;

  title?: string;

  department?: string;

  companyId?: string;

  emailAddresses: EmailAddress[];

  phoneNumbers: PhoneNumber[];

  addresses: Address[];

  tags: string[];

  ownerId?: string;

  status:
    | "lead"
    | "prospect"
    | "customer"
    | "partner"
    | "vendor"
    | "inactive";

  source?: string;

  createdAt: Date;
  updatedAt: Date;

}
