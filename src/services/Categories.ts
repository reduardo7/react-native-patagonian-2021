import { BaseService } from './BaseService';

class CategoriesService extends BaseService {
  get model(): string {
    return 'categories';
  }
}

export const Categories = new CategoriesService();
