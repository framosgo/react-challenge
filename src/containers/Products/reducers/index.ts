import { Product } from '../../../types';
import { ProductActions } from '../actions';
import { ProductActionTypes } from '../actionTypes';
import { initialState } from '../models';

export const productReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case ProductActionTypes.GetAllProductsSuccess:
      return new Map<string,Product>(action.payload!);
    case ProductActionTypes.GetAllProductsError:
      return new Map<string, Product>();
    default:
      return state;
  }
};
