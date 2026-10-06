export interface PhoneNumberResource {

  id: string;

  organizationId: string;

  countryCode: string;

  number: string;

  capabilities: {

    voice: boolean;
    sms: boolean;
    mms: boolean;

  };

}
