import { ShoppingCartActionTypes } from '../actionTypes';
import { Action, ProductChoosen } from '../../../types';

type AddProductAction = Action<ShoppingCartActionTypes.AddProduct, ProductChoosen>;

type RemoveProductAction = Action<ShoppingCartActionTypes.RemoveProduct, string>;

type CheckoutAction = Action<ShoppingCartActionTypes.Checkout>;

export type ShoppingCartActions = AddProductAction|RemoveProductAction|CheckoutAction;

export const addProduct = (product: ProductChoosen): AddProductAction => ({
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
