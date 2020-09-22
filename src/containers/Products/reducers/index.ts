import { ProductActions } from '../actions';
import { ProductActionTypes } from '../actionTypes';
import { initialState } from '../models';

export const productReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case ProductActionTypes.LoadProductList:
      return [...action.payload];
    default:
      return state;
  }
};
