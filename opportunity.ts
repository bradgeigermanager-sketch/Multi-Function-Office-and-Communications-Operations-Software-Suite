export interface Opportunity {

  id: string;

  companyId: string;

  primaryContactId?: string;

  ownerId: string;

  name: string;

  value: number;

  probability: number;

  stage:
    | "lead"
    | "qualified"
    | "discovery"
    | "proposal"
    | "negotiation"
    | "won"
    | "lost";

  expectedCloseDate?: Date;
}
