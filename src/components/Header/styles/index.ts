import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../../styles/sizes';
import { HEADER_BACKGROUND, HEADER_BORDER_COLOR } from '../../../styles/skin';

export const Header = styled.div`
  display: flex;
  height: ${ HEADER_HEIGHT }rem;
  justify-content: center;
  align-items: center;
  background-color: ${ HEADER_BACKGROUND };
  box-shadow: 0 4px 6px -6px ${ HEADER_BORDER_COLOR };
  margin-bottom: 2rem;
`;
Header.displayName = 'Header';
