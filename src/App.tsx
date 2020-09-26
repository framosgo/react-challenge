import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './contexts';
import Products from './containers/Products';
import ShoppingCart from './containers/ShoppingCart';
import getQuery, { TABLET } from './styles/media-queries';
import { useMedia } from 'use-media';
import { Sidebar } from './styles';

const App = () => {
  const isTabletOrLarger = useMedia(getQuery(TABLET));
  
  const shoppingCart = isTabletOrLarger && (
    <Sidebar>
      <ShoppingCart />
    </Sidebar>
  );

  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path='/'>
            { shoppingCart }
            <Products />
          </Route>
          <Route path='/shopping-cart'>
            <ShoppingCart />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App