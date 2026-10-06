export interface WorkflowCondition {
  field: string;

  operator:
    | "equals"
    | "contains"
    | "greater_than"
    | "less_than";

  value: any;
}
`
