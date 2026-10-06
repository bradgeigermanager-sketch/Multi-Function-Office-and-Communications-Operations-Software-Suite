export interface WorkflowCondition {

  field: string;

  operator:
    | "equals"
    | "not_equals"
    | "contains"
    | "greater_than"
    | "less_than"
    | "exists";

  value: any;
}
