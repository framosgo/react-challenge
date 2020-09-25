import styled from 'styled-components';
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
  display: flex;
  flex-flow: column;
`;
Content.displayName = 'Content';
