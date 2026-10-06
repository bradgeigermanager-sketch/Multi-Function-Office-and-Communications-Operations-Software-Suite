export interface Company {

  id: string;

  organizationId: string;

  name: string;

  website?: string;

  industry?: string;

  employeeCount?: number;

  annualRevenue?: number;

  parentCompanyId?: string;

  accountOwnerId?: string;

  description?: string;

  createdAt: Date;
}
``
