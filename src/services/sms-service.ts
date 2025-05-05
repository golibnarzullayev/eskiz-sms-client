import { TokenManager } from "../core/token-manger";
import {
  IBatchSendMessagePayload,
  ISendMessagePayload,
  ISendMessageResponse,
} from "../types";
import { HttpClient } from "../core/http-client";
import { DEFAULT_BASE_URL } from "../config";

export class SmsService {
  private http: HttpClient;

  constructor(private tokenManager: TokenManager) {
    this.http = new HttpClient(`${DEFAULT_BASE_URL}/api/message/sms`);
  }

  public async send(
    data: ISendMessagePayload
  ): Promise<{ data: ISendMessageResponse }> {
    const { message, to, from = "4546", callbackUrl = "" } = data;
    const token = await this.tokenManager.getToken();

    const response = await this.http.post<ISendMessageResponse>(
      "/send",
      { mobile_phone: to, message, from, callback_url: callbackUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return { data: response };
  }

  public async sendBatch(
    data: IBatchSendMessagePayload
  ): Promise<{ data: ISendMessageResponse }> {
    const token = await this.tokenManager.getToken();

    const { callbackUrl = "", from = "4546" } = data;
    const messages = data.messages.map(({ message, to, userSmsId }) => ({
      user_sms_id: userSmsId,
      to,
      text: message,
    }));

    const response = await this.http.post<ISendMessageResponse>(
      "/send-batch",
      { messages, from, callbackUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return { data: response };
  }

  public async sendGlobal(
    data: ISendMessagePayload
  ): Promise<{ data: ISendMessageResponse }> {
    const { message, to, from = "4546", callbackUrl = "" } = data;
    const token = await this.tokenManager.getToken();

    const response = await this.http.post<ISendMessageResponse>(
      "/send",
      { mobile_phone: to, message, from, callback_url: callbackUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return { data: response };
  }
}
