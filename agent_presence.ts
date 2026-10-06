export interface AgentPresence {

  agentId: string;

  status:
    | "available"
    | "busy"
    | "offline"
    | "break"
    | "meeting";

  lastUpdated: Date;
}
`
