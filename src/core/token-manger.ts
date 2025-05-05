import { DEFAULT_BASE_URL } from "../config";
import { EskizClientOptions, IToken } from "../types";
import { HttpClient } from "./http-client";

export class TokenManager {
  private token: string | null = null;
  private http: HttpClient;

  constructor(private options: EskizClientOptions) {
    this.http = new HttpClient(`${DEFAULT_BASE_URL}/api/auth`);
  }

  private async login(): Promise<void> {
    const response = await this.http.post<IToken>("/login", {
      email: this.options.email,
      password: this.options.password,
    });
    this.token = response.data.token;
    if (this.token) this.http.setToken(this.token);
  }

  public async getToken(): Promise<string> {
    if (!this.token) await this.login();
    return this.token as string;
  }
}
