import { BaseService } from './BaseService';

class CharactersService extends BaseService {
  override get model(): string {
    return 'characters';
  }
}

export const Characters = new CharactersService();
