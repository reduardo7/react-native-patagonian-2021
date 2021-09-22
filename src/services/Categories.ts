import { BaseService } from './BaseService';

class CategoriesService extends BaseService {
  get sortField(): string {
    return 'id';
  }

  get model(): string {
    return 'categories';
  }
}

export const Categories = new CategoriesService();
