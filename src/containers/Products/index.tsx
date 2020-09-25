import React, { useCallback, useMemo, useState } from 'react';
import { useAppContext } from '../../contexts';
import Card from './components/Card';
import { useProductRequest } from './hooks';
import {
  Content,
  FilterOption,
  FilterWrapper,
  Header,
  Title,
  Wrapper,
} from './styles';

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

  const productList = useMemo(() => Array.from(products).map(([key, product]) => (
    <Card key={ key } data={ product} onAdd={ () => {} } />
  )).slice(0, 10), [products]);

  return (
    <Wrapper>
      <Header>
        <Title>Product List</Title>
      </Header>
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
