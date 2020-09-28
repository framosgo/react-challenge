import styled from 'styled-components';
import {
  BUTTON_BORDER_COLOR,
  PRICE_COLOR,
  TEXT_PRIMARY_COLOR,
} from '../../../../../styles/skin';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  margin-bottom: 1rem;
`;
Wrapper.displayName = 'Wrapper';

export const Image = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
`;
Image.displayName = Image;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex: 1;
  margin: 1rem;
  margin-right: 0;
`;
Content.displayName = Content;

export const Name = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  font-family: monospace;
  height: 2.5rem;
  overflow: hidden;
  color: ${ TEXT_PRIMARY_COLOR };
`;
Name.displayName = 'Name';

export const Price = styled.span`
  font-weight: bold;
  align-self: flex-end;
  color: ${ PRICE_COLOR };
`;
Price.displayName = 'Price';

export const CounterWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  width: 4rem;
  border: 1px solid ${ BUTTON_BORDER_COLOR };
  border-radius: 5px;
`;
CounterWrapper.displayName = 'CounterWrapper';

export const CounterButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
CounterButton.displayName = 'CounterButton';

export const CounterDisplay = styled.div`
  display: flex;
`;
CounterDisplay.displayName = 'CounterDisplay';
