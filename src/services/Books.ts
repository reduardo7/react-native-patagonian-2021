import { BaseService } from './BaseService';

/**
 * Books service.
 */
class BooksService extends BaseService<Book> {
  get model(): string {
    return 'books';
  }
}

export const Books = new BooksService();
