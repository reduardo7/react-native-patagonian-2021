import { API_URL, LOG_REQUESTS } from '../config/envVariables';

interface IResponse<T> {
  data: T;
}

export abstract class BaseService<T = any> {
  abstract get model(): string;

  protected async _fetch(url: string): Promise<Response> {
    try {
      const response = await fetch(url);

      if (response.status !== 200) {
        console.error('Unexpected response status:', { url, response });
        throw new Error(`Unexpected response status=${response.status} fetching [${url}]`);
      }

      return response;
    } catch (err) {
      console.error(`[BS21] Error fetching [${url}]:`, err);
      throw err;
    }
  }

  protected async _request<R = any>(url: string): Promise<IResponse<R>> {
    try {
      const response = await this._fetch(url);
      const data: R = await response.json();

      // Show response
      if (LOG_REQUESTS) {
        console.info(`> ${url}`, JSON.stringify(data, null, 2));
      }

      return {
        data,
      } as IResponse<R>;
    } catch (err) {
      console.error(`[BS46] Error requesting [${url}]:`, err);
      throw err;
    }
  }

  /**
   *
   * @param uri API URI
   * @returns Response data.
   * @see https://github.com/theDavidBarton/the-harry-potter-database
   */
  public async request<R = T | T[]>(uri: string): Promise<IResponse<R>> {
    // Remove starting "/"
    uri = uri.replace(/^\/+/, '');
    return await this._request<R>(`${API_URL}/api/1/${uri}`);
  }

  /**
   * Search items.
   *
   * @param search Search text.
   * @returns Result items.
   */
  public async search(search: string) {
    const response = await this.request<T[]>(`/${this.model}?search=${encodeURI(search.trim())}`);
    for (const data of response.data) {
      await this.dataFormat(data);
    }
    return response;
  }

  /**
   * Get all items.
   *
   * @returns All items.
   */
  public async getAll() {
    const response = await this.request<T[]>(`/${this.model}/all`);
    for (const data of response.data) {
      await this.dataFormat(data);
    }
    return response;
  }

  /**
   * Get by ID.
   *
   * @param id Item ID.
   * @returns Item details.
   */
  public async getById(id: number) {
    const response = await this.request<T>(`/${this.model}/${id}`);
    await this.dataFormat(response.data);
    return response;
  }

  protected async dataFormat(data: T): Promise<void> {
    const d = data as any;
    d._ = new Date();
  }
}
