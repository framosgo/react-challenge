import { ProductActionTypes } from '../actionTypes';
import { Action, Product } from '../../../types';

type GetAllProductSuccessAction = Action<ProductActionTypes.GetAllProductsSuccess, Map<string,Product>>;

type GetAllProductErrorAction = Action<ProductActionTypes.GetAllProductsError>;

export type ProductActions = GetAllProductSuccessAction|GetAllProductErrorAction;

export const getAllProductsSuccess = (products: Map<string,Product>): GetAllProductSuccessAction => ({
  type: ProductActionTypes.GetAllProductsSuccess,
  payload: products,
});

export const getAllProductsError = (): GetAllProductErrorAction => ({
  type: ProductActionTypes.GetAllProductsError,
});
