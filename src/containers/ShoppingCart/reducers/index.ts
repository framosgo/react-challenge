import { ProductChoosen } from '../../../types';
import { ShoppingCartActions } from '../actions';
import { ShoppingCartActionTypes } from '../actionTypes';
import { initialState } from '../models';

export const shoppingCartReducer = (state = initialState, action: ShoppingCartActions) => {
  let productCart: ProductChoosen|undefined;
  const newData = new Map(state.data);
  switch (action.type) {
    case ShoppingCartActionTypes.AddProduct:
      productCart = state.data.get(action.payload!.id);
      if (!productCart) {
        const newProductCart = action.payload!;
        return {
          data: newData.set(newProductCart.id, newProductCart),
          total: state.total + newProductCart.price,
        };
      }
      const {id, amount, price, stock} = productCart;
      if (amount === stock) return state;
      return {
        data: newData.set(id, {...productCart, amount: amount + 1}),
        total: state.total + price,
      };

    case ShoppingCartActionTypes.RemoveProduct:
      productCart = state.data.get(action.payload!);
      if (!productCart) return state;
      if (productCart.amount === 1) {
        const updatedData = new Map(newData);
        updatedData.delete(productCart.id)
        return { data: updatedData, total: state.total - productCart.price }
      }
      return {
        data: newData.set(productCart.id, {...productCart, amount: productCart.amount - 1}),
        total: state.total - productCart.price,
      };
    default:
      return state;
  }
};
