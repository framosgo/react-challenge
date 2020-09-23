import React, { createContext, useContext, useReducer } from 'react';
import { ProductActions } from '../containers/Products/actions';
import { productReducer } from '../containers/Products/reducers';
import { ShoppingCartActions } from '../containers/ShoppingCart/actions';
import { shoppingCartReducer } from '../containers/ShoppingCart/reducers';
import { initialState } from '../models';
import { AppState } from '../types';

type AppActions = ProductActions | ShoppingCartActions;

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ products, shoppingCart }: AppState, action: AppActions) => ({
  products: productReducer(products, action as ProductActions),
  shoppingCart: shoppingCartReducer(shoppingCart, action as ShoppingCartActions),
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
