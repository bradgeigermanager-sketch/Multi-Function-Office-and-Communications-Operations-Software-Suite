export interface JwtPayload {

  userId: string;

  organizationId: string;

  roleIds: string[];

  permissions: string[];

}
