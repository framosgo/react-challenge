import Axios from 'axios';
import { API } from '../../../constants/api';
import { Product } from '../../../types';
import { createProductListFromServer } from '../models/fromServer';

type ProductParams = {
  favorite?: number;
}

export const getAllProducts = async (isFavorite = false): Promise<Product[]> => {
  const params: ProductParams = isFavorite ? {favorite: 1} : {};
  try {
    const { data } = await Axios.get<Product[]>(API.GET_GROCERIES, { params });

    return createProductListFromServer(data);
  } catch {
    throw new Error();
  }
};
