import styled from 'styled-components';
import { DESKTOP, MOBILE_XXL, TABLET } from '../../../styles/media-queries';
import { TEXT_PRIMARY_COLOR } from '../../../styles/skin';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
Wrapper.displayName = 'Wrapper';

export const Title = styled.h1`
  color: ${ TEXT_PRIMARY_COLOR };
`;
Title.displayName = 'Title';

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
