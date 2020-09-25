import React from 'react';
import { STOCK_THRESHOLD } from '../../../../constants/product';
import { Product } from '../../../../types';
import {
  BottomWrapper,
  Button,
  Description,
  HeartIcon,
  Image,
  Name,
  Price,
  Stock,
  Wrapper,
  WrapperContent,
  WrapperImage,
} from './styles';

interface Props {
  onAdd: () => void;
  data: Product;
}

const Card: React.FC<Props> = ({ data, onAdd }: Props) => {
  const {
    description,
    imageUrl,
    isFavourite,
    name,
    price,
    stock,
  } = data;

  const isAvailable = stock >= STOCK_THRESHOLD;

  return (
    <Wrapper>
      <WrapperImage>
        <Image src={ imageUrl }></Image>
        <HeartIcon isFavourite={ isFavourite } />
      </WrapperImage>
      <WrapperContent>
        <Name>{ name }</Name>
        <Description>{ description }</Description>
        <BottomWrapper>
          <Price>{ price }€</Price>
          <Stock isAvailable={ isAvailable }>{ stock } left</Stock>
          <Button disabled={ !isAvailable } onClick={ onAdd }>Add</Button>
        </BottomWrapper>
      </WrapperContent>
    </Wrapper>
  );
}

export default Card;
