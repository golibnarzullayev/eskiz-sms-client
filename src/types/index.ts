export interface EskizClientOptions {
  email: string;
  password: string;
}

export interface ISendMessagePayload {
  to: string;
  message: string;
  from?: string;
  callbackUrl?: string;
}

export interface IBatchSendMessagePayload {
  messages: Array<{ to: string; message: string; userSmsId: string }>;
  from?: string;
  callbackUrl?: string;
}

export interface IToken {
  message: string;
  data: { token: string };
  token_type: string;
}

export interface ISendMessageResponse {
  id: string;
  message: string;
  status: string | string[];
}
