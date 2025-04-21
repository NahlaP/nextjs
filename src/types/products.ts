// types/products.ts
export interface ProductImage {
    url: string;
    altText: string;
    isPrimary: boolean;
  }
  
  export interface ProductCategory {
    id: string;
    name: string;
    slug: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    slug: string;
    category: ProductCategory;
    description: string;
    images: ProductImage[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
  }