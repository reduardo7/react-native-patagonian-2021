import { API_URL, LOG_REQUESTS } from '../config/envVariables';

interface IResponse<T> {
  data: T;
}

export abstract class BaseService {
  protected static async request<T = any>(uri: string): Promise<IResponse<T>> {
    let data: T;

    // Remove starting "/"
    uri = uri.replace(/^\/+/, '');

    const url = `${API_URL}/api/1/${uri}`;

    try {
      const response = await fetch(url);
      data = await response.json();

      // Show response
      if (LOG_REQUESTS) {
        console.info(`> ${url}`, JSON.stringify(data, null, 2));
      }

      if (response.status !== 200) {
        console.error('Unexpected response status:', { url, response });
        throw new Error(`Unexpected response status=${response.status} fetching [${url}]`);
      }
    } catch (err) {
      console.error(`Error fetching [${url}]:`, err);
      throw err;
    }

    return {
      data,
    } as IResponse<T>;
  }
}
