import styled from 'styled-components';
import { DESKTOP, MOBILE_XXL, TABLET } from '../../../styles/media-queries';
import {
  HEADER_BACKGROUND,
  HEADER_BORDER_COLOR,
  LINK_PRIMARY_COLOR,
  TEXT_PRIMARY_COLOR,
} from '../../../styles/skin';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
Wrapper.displayName = 'Wrapper';

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  height: 4rem;
  justify-content: center;
  align-items: center;
  background-color: ${ HEADER_BACKGROUND };
  box-shadow: 0 4px 6px -6px ${ HEADER_BORDER_COLOR };
  margin-bottom: 2rem;
`;
Header.displayName = 'Header';

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${ TEXT_PRIMARY_COLOR };
`;
Title.displayName = 'Title';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin-bottom: 2rem;
  width: 8rem;
`;
FilterWrapper.displayName = 'FilterWrapper';

type FilterOptionProps = {
  isActive: boolean;
}

export const FilterOption = styled.span`
  display: flex;
  cursor: pointer;
  text-decoration: ${ ({ isActive }: FilterOptionProps) => isActive ? 'underline' : 'inherit' };
  color: ${ ({ isActive }: FilterOptionProps) => isActive ? `${ LINK_PRIMARY_COLOR }` : 'inherit' };
  font-weight: ${ ({ isActive }: FilterOptionProps) => isActive ? 'bold' : 'normal' };
`;
FilterWrapper.displayName = 'FilterWrapper';

export const Content = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  ${MOBILE_XXL} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${TABLET} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${DESKTOP} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
Content.displayName = 'Content';
