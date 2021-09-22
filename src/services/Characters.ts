import { BaseService } from './BaseService';

class CharactersService extends BaseService<Character> {
  get sortField(): keyof Character {
    return 'name';
  }

  get model(): string {
    return 'characters';
  }
}

export const Characters = new CharactersService();
