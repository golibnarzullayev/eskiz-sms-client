import { SmsService } from "./services/sms-service";
import { TokenManager } from "./core/token-manger";
import { EskizClientOptions } from "./types";

export class EskizClient {
  public sms: SmsService;

  constructor(options: EskizClientOptions) {
    const tokenManager = new TokenManager(options);
    this.sms = new SmsService(tokenManager);
  }
}
