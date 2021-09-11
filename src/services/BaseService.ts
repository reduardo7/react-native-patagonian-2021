import { API_URL, LOG_REQUESTS } from '../config/envVariables';

interface IResponse<T> {
  data: T;
}

/**
 * @see https://github.com/theDavidBarton/the-harry-potter-database
 */
export abstract class BaseService<T = any> {
  abstract get model(): string;

  public async request<R = T | T[]>(uri: string): Promise<IResponse<R>> {
    let data: R;

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
    } as IResponse<R>;
  }

  /**
   * Search items.
   *
   * @param search Search text.
   * @returns Result items.
   */
  public search(search: string) {
    return this.request<T[]>(`/${this.model}?search=${encodeURI(search.trim())}`);
  }

  /**
   * Get all items.
   *
   * @returns All items.
   */
  public getAll() {
    return this.request<T[]>(`/${this.model}/all`);
  }

  /**
   * Get by ID.
   *
   * @param id Item ID.
   * @returns Item details.
   */
  public async getById(id: number) {
    return this.request<T>(`/${this.model}/${id}`);
  }
}
