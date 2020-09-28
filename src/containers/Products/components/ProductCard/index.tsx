import React, { useCallback, useState } from 'react';
import { Product } from '../../../../types';
import { updateFavoriteProduct } from '../../api';
import { STOCK_THRESHOLD } from '../../constants';
import {
  BottomWrapper,
  Button,
  Content,
  Description,
  HeartIcon,
  ImageWrapper,
  Image,
  Name,
  Price,
  Stock,
  Wrapper,
} from './styles';

interface Props {
  onAdd: () => void;
  data: Product;
}

const ProductCard: React.FC<Props> = ({ data, onAdd }: Props) => {
  const [isFavourite, setFavourite] = useState(data.isFavourite);
  const {
    id,
    description,
    imageUrl,
    name,
    price,
    stock,
  } = data;

  const isAvailable = stock >= STOCK_THRESHOLD;

  const toggleFavouriteProduct = useCallback(async () => {
    try {
      await updateFavoriteProduct(id, !isFavourite);
      setFavourite(!isFavourite);
    } catch {}
  }, [id, isFavourite]);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={ imageUrl }></Image>
        <HeartIcon onClick={ toggleFavouriteProduct } isFavourite={ isFavourite } />
      </ImageWrapper>
      <Content>
        <Name>{ name }</Name>
        <Description>{ description }</Description>
        <BottomWrapper>
          <Price>{ price }€</Price>
          <Stock isAvailable={ isAvailable }>{ stock } left</Stock>
          <Button disabled={ !isAvailable } onClick={ onAdd }>Add</Button>
        </BottomWrapper>
      </Content>
    </Wrapper>
  );
}

export default ProductCard;
