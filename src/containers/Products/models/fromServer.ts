import { Product } from '../../../types';
import { safeNumber, safeString } from '../../../utils/safeTypes';

export type ProductFromServer = {
  favorite?: unknown;
  id?: unknown;
  image_url?: unknown;
  productName?: unknown;
  price?: unknown;
  productDescription?: unknown;
  stock?: unknown;
}

const createProductFromServer = (product: ProductFromServer): Product => {
  const { id, price, productName } = product;
  if (id === undefined || productName === undefined || price === undefined) {
    console.error('Error creating <Product> model', product);
  }

  return {
    description: safeString(product.productDescription),
    id: safeString(id),
    imageUrl: safeString(product.image_url),
    isFavourite: !!product.favorite,
    name: safeString(productName),
    price: safeNumber(price),
    stock: safeNumber(product.stock),
  };
};

export const createProductListFromServer = (productList: ProductFromServer[]): Map<string, Product> => {
  if (!Array.isArray(productList)) {
    console.error('Error creating <Map<string,Product>> model. Not array found.', productList);
    return new Map<string, Product>();
  }

  return productList.reduce((products, product) => {
    const safeProduct = createProductFromServer(product);
    return products.set(safeProduct.id, safeProduct);
  }, new Map<string, Product>());
};
