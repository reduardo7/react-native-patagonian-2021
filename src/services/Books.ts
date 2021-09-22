import { BaseService } from './BaseService';

/**
 * Books service.
 */
class BooksService extends BaseService<Book> {
  get sortField(): keyof Book {
    return 'title';
  }

  get model(): string {
    return 'books';
  }
}

export const Books = new BooksService();
