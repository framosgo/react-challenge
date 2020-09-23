import { AppState } from '../types';
import { initialState as products } from '../containers/Products/models';
import { initialState as shoppingCart } from '../containers/ShoppingCart/models';

export const initialState: AppState = {
  products,
  shoppingCart,
};
