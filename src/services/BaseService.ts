import { API_URL, LOG_REQUESTS } from '../config/envVariables';

interface IResponse<T> {
  data: T;
}

function sortData(sortField: any) {
  return (a: any, b: any) => {
    const sa = (a[sortField] as string) || '';
    const sb = (b[sortField] as string) || '';
    return sa.localeCompare(sb);
  };
}

/**
 * @see https://github.com/theDavidBarton/the-harry-potter-database
 */
export abstract class BaseService<T = any> {
  abstract get model(): string;
  abstract get sortField(): keyof T;

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
  public async search(search: string) {
    const r = await this.request<T[]>(`/${this.model}?search=${encodeURI(search.trim())}`);
    r.data = r.data.sort(sortData(this.sortField));
    return r;
  }

  /**
   * Get all items.
   *
   * @returns All items.
   */
  public async getAll() {
    const r = await this.request<T[]>(`/${this.model}/all`);
    r.data = r.data.sort(sortData(this.sortField));
    return r;
  }

  /**
   * Get by ID.
   *
   * @param id Item ID.
   * @returns Item details.
   */
  public async getById(id: number) {
    const response = await this.request<T>(`/${this.model}/${id}`);
    // @ts-ignore
    response.data = response.data[0];
    return response;
  }
}
