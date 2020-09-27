import styled from 'styled-components';
import { TABLET } from '../../../styles/media-queries';
import { SIDEBAR_WIDTH } from '../../../styles/sizes';
import { SIDEBAR_BACKGROUND, SIDEBAR_BORDER_COLOR } from '../../../styles/skin';
import getLayerPosition from '../../../styles/z-index';

export const Sidebar = styled.div`
  display: none;

  ${ TABLET } {
    display: inherit;
    margin: 0;
    padding: 0;
    right: 0;
    width: ${ SIDEBAR_WIDTH }rem;
    background-color: ${ SIDEBAR_BACKGROUND };
    transition: right 0.2s;
    position: fixed;
    height: 100%;
    overflow: auto;
    box-shadow: -4px 0 6px -6px ${ SIDEBAR_BORDER_COLOR };
    z-index: ${ getLayerPosition('SIDEBAR') };
  }
`;
Sidebar.displayName = 'Sidebar';
