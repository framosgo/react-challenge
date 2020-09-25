import Axios from 'axios';
import { API } from '../../../constants/api';
import { Product } from '../../../types';
import { createProductListFromServer, ProductFromServer } from '../models/fromServer';


const favourite = {
  favorite: '1'
};

export const getAllProducts = async (isFavourite = false): Promise<Map<string,Product>> => {
  const params: Partial<ProductFromServer> = isFavourite ? favourite : {};
  try {
    const { data } = await Axios.get<ProductFromServer[]>(API.GET_GROCERIES, { params });

    return createProductListFromServer(data);
  } catch {
    throw new Error();
  }
};

export const updateFavoriteProduct = async (id: string, isFavourite: boolean): Promise<void> => {
  const API_URL = API.PATCH_GROCERY.replace(':id', id);
  const params: Partial<ProductFromServer> = { favorite: isFavourite ? '1' : 0 };
  try {
    await Axios.patch<void>(API_URL, params);
  } catch {
    throw new Error();
  }
};