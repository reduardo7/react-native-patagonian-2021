import { BaseService } from './BaseService';

class CharactersService extends BaseService<Character> {
  get model(): string {
    return 'characters';
  }
}

export const Characters = new CharactersService();
