// types/database.ts
import { Product } from './products';
import { User } from './users';

export interface Database {
  users: User[];
  products: Product[];
}