import React from 'react';
import { useAppContext } from '../../contexts';
import { useProductRequest } from './hooks';

const Products = () => {
  const { state: { products }, dispatch } = useAppContext();

  useProductRequest(dispatch);

  const productList = products.map(p => (
    <p key={ p.id }>{ p.productName }</p>
  ));

  return (
    <div>{ productList }</div>
  );
}

export default Products;
