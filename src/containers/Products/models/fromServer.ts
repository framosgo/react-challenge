import { Product } from '../../../types';
import { safeNumber, safeString } from '../../../utils/safeTypes';

export type ProductFromServer = {
  favorite?: unknown;
  id?: unknown;
  image_url?: unknown;
  productName?: unknown;
  price?: unknown;
  productDescription?: unknown;
}

const createProductFromServer = (product: ProductFromServer): Product => {
  const {favorite, id, image_url, price, productDescription, productName} = product;
  if (id === undefined || productName === undefined || price === undefined) {
    console.error('Error creating <Product> model', product);
  }

  return {
    favorite: safeNumber(favorite),
    id: safeString(id),
    imageUrl: safeString(image_url),
    price: safeNumber(price),
    productDescription: safeString(productDescription),
    productName: safeString(productName),
  };
};

export const createProductListFromServer = (productList: ProductFromServer[]): Product[] => {
  if (!Array.isArray(productList)) {
    console.error('Error creating <Product[]> model. Not array found.', productList);
    return [];
  }

  return productList.map(p => createProductFromServer(p));
};
