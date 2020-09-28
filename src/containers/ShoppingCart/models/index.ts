import { Product, ProductChoosen, ShoppingCart } from '../../../types';

export const initialState: ShoppingCart = {
  data: new Map<string, ProductChoosen>(),
  total: 0,
};

export const productToProductChoosen = (product: Product): ProductChoosen => ({
  ...product,
  amount: 1,
});
