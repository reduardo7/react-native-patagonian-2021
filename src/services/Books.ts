import CacheHelper from '../utils/CacheHelper';
import { BaseService } from './BaseService';

const bookImgBaseUrl = 'https://static.wikia.nocookie.net/harrypotter/images';

/**
 * Books service.
 */
class BooksService extends BaseService<Book> {
  override get model(): string {
    return 'books';
  }

  private async _getBookImg(bookTitle: string) {
    try {
      const key = encodeURIComponent(bookTitle.replace(/\s/g, '_'));
      const response = await this._fetch(`https://harrypotter.fandom.com/wiki/${key}`);
      let s = await response.text();
      s = s.substring(s.indexOf('<figure'));
      s = s.substring(s.indexOf(`<img src="${bookImgBaseUrl}`));
      s = s.substring(s.indexOf(bookImgBaseUrl));
      return s.substring(0, s.indexOf('"'));
    } catch (err) {
      console.info('[B21] Error on _getBookImg:', bookTitle);
      return '';
    }
  }

  protected override async dataFormat(book: Book) {
    book.img = book?.title
      ? await CacheHelper.tryGet(`book:${book.id}`, () => this._getBookImg(book.title))
      : '';
  }
}

// https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Philosopher's_Stone

export const Books = new BooksService();
