import styled from 'styled-components';
import { DESKTOP, MOBILE_XXL, TABLET, TABLET_L } from '../../../styles/media-queries';
import { SIDEBAR_WIDTH } from '../../../styles/sizes';
import { LINK_PRIMARY_COLOR } from '../../../styles/skin';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;

  ${ TABLET } {
    width: calc(100vw - ${ SIDEBAR_WIDTH }rem);
    right: ${ SIDEBAR_WIDTH }rem;
  }
`;
Wrapper.displayName = 'Wrapper';

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

  ${ MOBILE_XXL } {
    grid-template-columns: repeat(3, 1fr);
  }

  ${ TABLET } {
    grid-template-columns: repeat(2, 1fr);
  }

  ${ TABLET_L } {
    grid-template-columns: repeat(3, 1fr);
  }

  ${ DESKTOP } {
    grid-template-columns: repeat(4, 1fr);
  }
`;
Content.displayName = 'Content';
