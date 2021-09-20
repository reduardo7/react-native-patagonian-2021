import { BaseService } from './BaseService';

class CategoriesService extends BaseService {
  override get model(): string {
    return 'categories';
  }
}

export const Categories = new CategoriesService();
