import { API_URL } from '../config/envVariables';

interface IResponse<T> {
  data: T;
}

export abstract class BaseService {
  protected static async request<T = any>(uri: string): Promise<IResponse<T>> {
    let data: T;

    try {
      // Remove starting "/"
      uri = uri.replace(/^\/+/, '');
      const response = await fetch(`${API_URL}/api/1/${uri}`);
      data = await response.json();

      if (response.status !== 200) {
        console.error('Unexpected response status:', response);
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (err) {
      console.error('Error fetching all books:', err);
      throw err;
    }

    return {
      data,
    } as IResponse<T>;
  }
}
