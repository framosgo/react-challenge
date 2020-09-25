import { ProductCart, ShoppingCart } from '../../../types';

export const initialState: ShoppingCart = {
  data: new Map<string, ProductCart>(),
  total: 0,
};
