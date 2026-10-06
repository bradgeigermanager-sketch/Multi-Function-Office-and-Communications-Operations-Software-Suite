export interface ProjectCommunication {

  id: string;

  projectId: string;

  communicationId: string;

  communicationType:
    | "call"
    | "email"
    | "sms"
    | "meeting";
}
