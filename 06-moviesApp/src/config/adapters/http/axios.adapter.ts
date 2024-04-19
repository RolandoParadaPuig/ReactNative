import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';

export interface Options {
  baseUrl: string;
  params: Record<string, unknown>;
}

export class AxioAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;
  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }
  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined,
  ): Promise<T> {
    try {
      const {data} = await this.axiosInstance.get<T>(url, options);

      return data;
    } catch (error) {
      throw new Error(`Error Fetching get: ${url}`);
    }
  }
}
