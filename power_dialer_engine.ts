export interface PowerDialCampaign {

  id: string;

  name: string;

  queueId: string;

  activeUsers: string[];

  maxAttempts: number;

  voicemailEnabled: boolean;
}
