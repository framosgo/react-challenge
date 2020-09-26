import styled from 'styled-components';
import { TABLET } from './media-queries';
import { SIDEBAR_WIDTH } from './sizes';
import { SIDEBAR_BACKGROUND } from './skin';
import getLayerPosition from './z-index';

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
    z-index: ${ getLayerPosition('SIDEBAR') };
  }
`;
Sidebar.displayName = 'Sidebar';
