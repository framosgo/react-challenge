export type Action<T, P = undefined> = {
  type: T;
  payload?: P;
}

export type Product = {
  favorite: number;
  id: string;
  imageUrl: string;
  productName: string;
  price: number;
  productDescription: string;
}

export type AppState = {
  products: Product[];
  shoppingCart: number;
}
