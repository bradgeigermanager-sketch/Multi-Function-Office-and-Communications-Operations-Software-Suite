export interface Lead {

  id: string;

  source:
    | "website"
    | "phone"
    | "email"
    | "import"
    | "api"
    | "manual";

  firstName: string;

  lastName: string;

  company?: string;

  email?: string;

  phone?: string;

  assignedUserId?: string;

  status:
    | "new"
    | "working"
    | "qualified"
    | "converted"
    | "rejected";
}
