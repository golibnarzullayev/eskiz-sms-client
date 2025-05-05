import { TokenManager } from "../core/token-manger";
import { ISendMessagePayload, ISendMessageResponse } from "../types";
import { HttpClient } from "../core/http-client";
import { DEFAULT_BASE_URL } from "../config";

export class SmsService {
  private http: HttpClient;

  constructor(public tokenManager: TokenManager) {
    this.http = new HttpClient(`${DEFAULT_BASE_URL}/api`);
  }

  async send({ to, message, from = "4546" }: ISendMessagePayload) {
    const token = await this.tokenManager.getToken();

    const res = await this.http.post<ISendMessageResponse>(
      "/message/sms/send",
      { mobile_phone: to, message, from },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return res;
  }
}
