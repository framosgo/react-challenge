import { ShoppingCartActionTypes } from '../actionTypes';
import { Action, Product, ProductCart } from '../../../types';

type AddProductAction = Action<ShoppingCartActionTypes.AddProduct, ProductCart>;

type RemoveProductAction = Action<ShoppingCartActionTypes.RemoveProduct, string>;

type CheckoutAction = Action<ShoppingCartActionTypes.Checkout>;

export type ShoppingCartActions = AddProductAction|RemoveProductAction|CheckoutAction;

export const addProduct = (product: ProductCart): AddProductAction => ({
  type: ShoppingCartActionTypes.AddProduct,
  payload: product,
});

export const removeProduct = (productID: string): RemoveProductAction => ({
  type: ShoppingCartActionTypes.RemoveProduct,
  payload: productID,
});

export const checkout = (): CheckoutAction => ({
  type: ShoppingCartActionTypes.Checkout,
});
