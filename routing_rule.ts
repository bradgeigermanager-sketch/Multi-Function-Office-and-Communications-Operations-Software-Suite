export interface RoutingRule {

  id: string;

  priority: number;

  conditions: RuleCondition[];

  destinationQueue: string;
}
