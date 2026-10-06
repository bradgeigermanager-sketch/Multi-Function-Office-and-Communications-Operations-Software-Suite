export interface Workflow {

  id: string;

  organizationId: string;

  name: string;

  description?: string;

  enabled: boolean;

  trigger: WorkflowTrigger;

  conditions: WorkflowCondition[];

  actions: WorkflowAction[];

  createdBy: string;

  createdAt: Date;
}
