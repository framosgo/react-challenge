import React from 'react';
import { AppProvider } from './contexts';
import Products from './containers/Products';

const App = () => (
  <AppProvider>
    // your stuff
    <Products />
  </AppProvider>
)

export default App