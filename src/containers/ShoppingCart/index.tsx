import React, { useCallback } from 'react';
import Header from '../../components/Header';
import { Routes } from '../../constants/routes';
import { useAppContext } from '../../contexts';
import { ProductChoosen } from '../../types';
import * as actions from './actions';
import ProductCart from './components/ProductCart';
import { Button, ProductList, TotalName, TotalValue, TotalWrapper, Wrapper } from './styles';

const ShoppingCart = () => {
  const { state: { shoppingCart }, dispatch } = useAppContext();

  const isDisabled = shoppingCart.total === 0;

  const addProduct = useCallback((product: ProductChoosen) => () => {
    dispatch(actions.addProduct(product));
  }, [dispatch]);

  const removeProduct = useCallback((productID: string) => () => {
    dispatch(actions.removeProduct(productID));
  }, [dispatch])

  const productsCart = Array.from(shoppingCart.data).map(([key, product]) => (
    <ProductCart
      key={ key }
      onAdd={ addProduct(product) }
      onRemove={ removeProduct(key) }
      data={ product }
    />
  ));

  return (
    <Wrapper>
      <Header backRoute={ Routes.Products } title='Cart' />
      <ProductList>
        { productsCart }
      </ProductList>
      <TotalWrapper>
        <TotalName>Total amount</TotalName>
        <TotalValue>{ shoppingCart.total }€</TotalValue>
      </TotalWrapper>
      <Button disabled={ isDisabled }>Make a payment</Button>
    </Wrapper>
  );
}

export default ShoppingCart