import React from 'react';
import Header from '../../components/Header';
import { Routes } from '../../constants/routes';
import { Wrapper } from './styles';

const ShoppingCart = () => (
  <Wrapper>
    <Header backRoute={ Routes.Products } title='Cart' />
  </Wrapper>
);

export default ShoppingCart