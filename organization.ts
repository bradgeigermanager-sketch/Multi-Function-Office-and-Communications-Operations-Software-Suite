export interface Organization {
  id: string;

  name: string;

  domain?: string;

  tenantType:
    | "company"
    | "agency"
    | "franchise"
    | "enterprise";

  plan:
    | "free"
    | "professional"
    | "business"
    | "enterprise";

  createdAt: Date;
}
