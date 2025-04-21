// src/types/index.ts

// User Interface
export interface User {
    id?: string; // Optional for creation
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  // Product Image Interface
  export interface ProductImage {
    url: string;
    altText?: string;
    isPrimary?: boolean;
  }
  
  // Product Variant Interface
  export interface ProductVariant {
    id?: string;
    name: string;
    price: number;
    stock: number;
    attributes: {
      [key: string]: string; // { size: 'XL', color: 'blue' }
    };
  }
  
  // Product Category Interface
  export interface Category {
    id?: string;
    name: string;
    slug: string;
    description?: string;
  }
  
  // Main Product Interface
  export interface Product {
    id?: string;
    name: string;
    slug: string;
    description: string;
    category: Category | string; // Can be object or just ID
    images: ProductImage[];
    basePrice: number;
    variants?: ProductVariant[];
    brand: string;
    rating?: {
      average: number;
      count: number;
    };
    isFeatured: boolean;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  // Database Schema Interface
  export interface Database {
    users: User[];
    products: Product[];
    categories?: Category[];
  }
  
  // API Response Interfaces
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
  }
  
  // Pagination Interface
  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
  }