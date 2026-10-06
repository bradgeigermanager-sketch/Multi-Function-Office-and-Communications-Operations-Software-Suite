export interface Transcript {

  id: string;

  callId: string;

  fullText: string;

  summary?: string;

  keywords: string[];

  sentiment?: number;
}
