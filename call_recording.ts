export interface Recording {

  id: string;

  callId: string;

  durationSeconds: number;

  storageUrl: string;

  transcriptStatus:
    | "pending"
    | "processing"
    | "completed";

}
