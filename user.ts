export interface User {
  id: string;

  organizationId: string;

  email: string;

  firstName: string;

  lastName: string;

  title?: string;

  department?: string;

  status:
    | "active"
    | "inactive"
    | "suspended";

  roleIds: string[];

  teamIds: string[];

  createdAt: Date;
}
`
