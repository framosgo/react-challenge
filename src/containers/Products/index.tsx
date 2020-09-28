import React, { useCallback, useMemo, useState } from 'react';
import Header from '../../components/Header';
import { Routes } from '../../constants/routes';
import * as shoppingCartActions from '../ShoppingCart/actions';
import { productToProductChoosen } from '../ShoppingCart/models';
import { useAppContext } from '../../contexts';
import ProductCard from './components/ProductCard';
import { useProductRequest } from './hooks';
import {
  Content,
  FilterOption,
  FilterWrapper,
  Wrapper,
} from './styles';
import { Product } from '../../types';

enum FilterOptions {
  All,
  Favourites,
}

const Products = () => {
  const [filterOption, setFilterOption] = useState(FilterOptions.All);
  const { state: { products }, dispatch } = useAppContext();

  const isFavouriteOptionSelected = FilterOptions.Favourites === filterOption;

  useProductRequest(dispatch, isFavouriteOptionSelected);

  const handleFilterClick = useCallback((option: FilterOptions) => () => {
    setFilterOption(option);
  }, []);

  const addProduct = useCallback((product: Product) => () => {
    dispatch(shoppingCartActions.addProduct(productToProductChoosen(product)));
  }, [dispatch]);

  const productList = useMemo(() => Array.from(products).map(([key, product]) => (
    <ProductCard key={ key } data={ product} onAdd={ addProduct(product) } />
  )), [products, addProduct]);

  return (
    <Wrapper>
      <Header forwardRoute={ Routes.ShoppingCart } title='Product List' />
      <FilterWrapper>
        <FilterOption isActive={ !isFavouriteOptionSelected } onClick={ handleFilterClick(FilterOptions.All) }>
          All
        </FilterOption>
        |
        <FilterOption isActive={ isFavouriteOptionSelected } onClick={ handleFilterClick(FilterOptions.Favourites) }>
          Favourites
        </FilterOption>
      </FilterWrapper>
      <Content>
        { productList }
      </Content>
    </Wrapper>
  );
}

export default Products;
