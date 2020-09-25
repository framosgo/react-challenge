import React from 'react';
import { AppProvider } from './contexts';
import Products from './containers/Products';

const App = () => (
  <AppProvider>
    <Products />
  </AppProvider>
)

export default App