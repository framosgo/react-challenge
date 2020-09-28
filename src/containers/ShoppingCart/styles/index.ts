import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;
Wrapper.displayName = 'Wrapper';

export const Content = styled.div`
  display: flex;
  flex-flow: column;
`;
Content.displayName = 'Content';

export const ProductList = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  padding: 1rem;
`;
ProductList.displayName = 'ProductList';

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;
  padding: 2rem 1rem;
  box-shadow: 0 4px 6px -6px grey;
`;
TotalWrapper.displayName = 'TotalWrapper';

export const TotalName = styled.div`
  flex: 3;
  text-align: end;
`;
TotalName.displayName = 'TotalName';

export const TotalValue = styled.div`
  flex: 1;
`;
TotalValue.displayName = 'TotalValue';

export const Button = styled.button`
  cursor: pointer;
  align-self: center;
  width: calc(100% - 2rem);
  margin: 2rem 1rem;
  height: 2rem;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: monospace;
`;
Button.displayName = 'Button';
