import styled from 'styled-components';
import {
  ERROR_COLOR,
  FAVOURITE_COLOR,
  SECONDARY_BACKGROUND,
  SUCCESS_COLOR,
  TEXT_PRIMARY_COLOR,
  UNFAVOURITE_COLOR,

} from '../../../../../styles/skin';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${ SECONDARY_BACKGROUND };
  width: 10rem;
  height: 16.5rem;
  margin: 1rem;
`;
Wrapper.displayName = 'Wrapper';

export const WrapperImage = styled.div`
  position: relative;
  display: flex;
`;
WrapperImage.displayName = WrapperImage;

type HeartIconProps = {
  isFavourite: boolean;
}

export const HeartIcon = styled.div`
  position: absolute;
  width: 1.8rem;
  height: 1.5rem;
  top: 0.5rem;
  right: 0.5rem;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 0.9375rem;
    top: 0;
    width: 0.9375rem;
    height: 1.5rem;
    background: ${ ({ isFavourite }: HeartIconProps) => (
      isFavourite ? `${ FAVOURITE_COLOR }` : `${ UNFAVOURITE_COLOR }`
    ) };
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
HeartIcon.displayName = HeartIcon;

export const Image = styled.img`
  width: auto;
  height: 10rem;
  object-fit: contain;
`;
Image.displayName = Image;

export const WrapperContent = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex: 1;
  padding: 0.5rem;
`;
WrapperContent.displayName = WrapperContent;

export const Name = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  font-family: monospace;
  max-height: 2.5rem;
  overflow: hidden;
  color: ${ TEXT_PRIMARY_COLOR };
`;
Name.displayName = 'Name';

export const Description = styled.div`
  padding-top: 0.2rem;
  font-size: 0.8rem;
  color: ${ TEXT_PRIMARY_COLOR };
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;
Description.displayName = 'Description';

export const BottomWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;
BottomWrapper.displayName = 'BottomWrapper';

export const Price = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 1.2rem;
`;
Price.displayName = 'Price';

type StockProps = {
  isAvailable: boolean;
}

export const Stock = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 0.8rem;
  color: ${ ({ isAvailable }: StockProps) => (
    isAvailable ? `${ SUCCESS_COLOR }` : `${ ERROR_COLOR }`
  ) };
`;
Stock.displayName = 'Stock';

export const Button = styled.button`
  display: flex;
  flex-flow: column;
`;
Button.displayName = 'Button';
