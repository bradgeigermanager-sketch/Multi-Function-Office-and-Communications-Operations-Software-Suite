export interface Note {

  id: string;

  entityType:
    | "contact"
    | "company"
    | "opportunity"
    | "project";

  entityId: string;

  content: string;

  createdBy: string;

  createdAt: Date;
}
