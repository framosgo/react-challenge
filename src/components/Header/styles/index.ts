import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HEADER_HEIGHT } from '../../../styles/sizes';
import { HEADER_BACKGROUND, HEADER_BORDER_COLOR, TEXT_PRIMARY_COLOR } from '../../../styles/skin';
import { TABLET } from '../../../styles/media-queries';

export const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  height: ${ HEADER_HEIGHT }rem;
  justify-content: center;
  align-items: center;
  background-color: ${ HEADER_BACKGROUND };
  box-shadow: 0 4px 6px -6px ${ HEADER_BORDER_COLOR };
  margin-bottom: 2rem;
`;
HeaderWrapper.displayName = 'HeaderWrapper';

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${ TEXT_PRIMARY_COLOR };
`;
Title.displayName = 'Title';

type AngleLinkProps = {
  isBack?: boolean;
}

export const AngleLink = styled(Link)`
  display: inline-block;
  position absolute;
  width: 20px;
  height: 20px;
  left: ${ ({ isBack }: AngleLinkProps) => isBack ? '1rem' : 'auto' };
  right: ${ ({ isBack }: AngleLinkProps) => isBack ? 'auto': '1rem' };
  background: transparent;
  border-width: 5px;
  border-top: 2px solid ${ HEADER_BORDER_COLOR };
  border-left: 2px solid ${ HEADER_BORDER_COLOR };
  text-decoration: none;
  color: transparent;
  transform: rotate(${ ({ isBack }: AngleLinkProps) => isBack ? -45 : 135 }deg);

  ${ TABLET } {
    display: none;
  }
`;
AngleLink.displayName = 'AngleLink';
