export interface ProductResource {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export interface ProductSearchResponseResource {
  products: ProductResource[];
  total: number;
  skip: number;
  limit: number;
}
