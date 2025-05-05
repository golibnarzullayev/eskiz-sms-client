import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(private baseURL: string, private token?: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });

    this.axiosInstance.interceptors.request.use((config) => {
      if (this.token) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = `Bearer ${this.token}`;
      }
      return config;
    });
  }

  public setToken(token: string) {
    this.token = token;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config).then((res) => res.data);
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.axiosInstance
      .post<T>(url, data, config)
      .then((res) => res.data);
  }
}
