export interface AssignmentRule {

  id: string;

  name: string;

  priority: number;

  conditions: RuleCondition[];

  assignedTeamId?: string;

  assignedUserId?: string;
}
