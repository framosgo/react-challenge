import React from 'react';
import { useAppContext } from '../../contexts';
import Card from './components/Card';
import { useProductRequest } from './hooks';
import { Content, Title, Wrapper } from './styles';

const Products = () => {
  const { state: { products }, dispatch } = useAppContext();

  useProductRequest(dispatch);

  const productList = products.slice(0, 10).map(product => (
    <Card key={ product.id } data={ product} onAdd={ () => {} } />
  ));

  return (
    <Wrapper>
      <Title>Product List</Title>
      <Content>
        { productList }
      </Content>
    </Wrapper>
  );
}

export default Products;
