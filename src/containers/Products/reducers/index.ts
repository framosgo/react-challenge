import { ProductActions } from '../actions';
import { ProductActionTypes } from '../actionTypes';
import { initialState } from '../models';

export const productReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case ProductActionTypes.GetAllProductsSuccess:
      return [...action.payload!];
    case ProductActionTypes.GetAllProductsError:
      return [];
    default:
      return state;
  }
};
