import { BaseService } from './BaseService';

/**
 * Books service.
 */
export class Books extends BaseService {
  /**
   * Get all books list.
   *
   * @returns Get Books list.
   */
  public static getAll() {
    return this.request('/books/all');
  }

  /**
   * Get Book by ID.
   *
   * @param id Book ID.
   * @returns Book details.
   */
  public static async getById(id: number) {
    return this.request(`/books/${id}`);
  }
}
