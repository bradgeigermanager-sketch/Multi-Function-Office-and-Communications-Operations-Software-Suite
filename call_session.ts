export interface CallSession {

  id: string;

  callerNumber: string;

  calledNumber: string;

  contactId?: string;

  assignedAgentId?: string;

  startedAt: Date;

  endedAt?: Date;

  durationSeconds?: number;

  recordingId?: string;

  transcriptId?: string;

  disposition?: string;
}
