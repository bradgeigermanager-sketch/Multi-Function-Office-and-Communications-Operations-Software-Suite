export interface Relationship {

  id: string;

  contactId: string;

  companyId: string;

  relationshipType:
    | "decision_maker"
    | "influencer"
    | "technical_contact"
    | "procurement"
    | "billing"
    | "executive";

}
