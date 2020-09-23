import { Dispatch, useCallback, useEffect } from 'react';
import {
  getAllProductsError,
  getAllProductsSuccess,
  ProductActions,
} from '../actions';
import * as api from '../api';

export const useProductRequest = (dispatch: Dispatch<ProductActions>, isFavorite = false): void => {
  const getAllProducts = useCallback(async () => {
    try {
      const products = await api.getAllProducts(isFavorite);
      dispatch(getAllProductsSuccess(products));
    } catch {
      dispatch(getAllProductsError())
    }
  }, [isFavorite, dispatch]);

  useEffect(() => {
    getAllProducts();
  }, [isFavorite, getAllProducts]);
};
