import React from 'react';
import {
  AngleLink,
  HeaderWrapper,
  Title,
} from './styles';

interface Props {
  backRoute?: string;
  forwardRoute?: string;
  title: string;
}

const Header: React.FC<Props> = ({ backRoute, forwardRoute, title }: Props) => {
  const backAngle = backRoute && <AngleLink isBack to={ backRoute }></AngleLink>;
  const forwardAngle = forwardRoute && <AngleLink to={ forwardRoute }></AngleLink>;

  return (
    <HeaderWrapper>
      { backAngle }
      <Title>{ title }</Title>
      { forwardAngle }
    </HeaderWrapper>
  );
}

export default Header;
