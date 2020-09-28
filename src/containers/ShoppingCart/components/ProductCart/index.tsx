import React, { useCallback } from 'react';
import { ProductChoosen } from '../../../../types';
import {
  Content,
  CounterButton,
  CounterDisplay,
  CounterWrapper,
  Image,
  Name,
  Price,
  Wrapper,
} from './styles';

interface Props {
  data: ProductChoosen;
  onAdd: () => void;
  onRemove: () => void;
}

const ProductCart: React.FC<Props> = ({ data, onAdd, onRemove }: Props) => {
  const {
    amount,
    imageUrl,
    name,
    price,
    stock,
  } = data;

  const canAddProduct = stock > amount;

  const handleAddProduct = useCallback(() => {
    if (canAddProduct) {
      onAdd();
    }
  }, [canAddProduct, onAdd]);

  return (
    <Wrapper>
      <Image src={ imageUrl } />
      <Content>
        <Name>{ name }</Name>
        <Price>{ price * amount }€</Price>
        <CounterWrapper>
          <CounterButton onClick={ onRemove }>-</CounterButton>
          <CounterDisplay>{ amount }</CounterDisplay>
          <CounterButton onClick={ handleAddProduct }>+</CounterButton>
        </CounterWrapper>
      </Content>
    </Wrapper>
  );
}

export default ProductCart;
