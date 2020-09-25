export type Action<T, P = undefined> = {
  type: T;
  payload?: P;
}

export type Product = {
  description: string;
  id: string;
  imageUrl: string;
  isFavourite: boolean;
  name: string;
  price: number;
  stock: number;
}

export type AppState = {
  products: Product[];
  shoppingCart: number;
}
