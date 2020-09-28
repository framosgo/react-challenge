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

export type ProductChoosen = Product & {
  amount: number;
}

export type ShoppingCart = {
  data: Map<string, ProductChoosen>;
  total: number;
}

export type AppState = {
  products: Map<string,Product>;
  shoppingCart: ShoppingCart;
}
