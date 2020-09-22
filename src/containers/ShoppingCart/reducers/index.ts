import { ShoppingCartActions } from '../actions';
import { ShoppingCartActionTypes } from '../actionTypes';
import { initialState } from '../models';

export const shoppingCartReducer = (state = initialState, action: ShoppingCartActions) => {
  switch (action.type) {
    case ShoppingCartActionTypes.AddProduct:
      return state + 1;
    case ShoppingCartActionTypes.RemoveProduct:
      return state - 1;
    default:
      return state;
  }
};
