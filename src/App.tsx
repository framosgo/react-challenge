import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './contexts';
import Products from './containers/Products';
import ShoppingCart from './containers/ShoppingCart';
import getQuery, { TABLET } from './styles/media-queries';
import { useMedia } from 'use-media';
import { Sidebar } from './components/Sidebar/styles';
import { Routes } from './constants/routes';

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
          <Route exact path={ Routes.Products }>
            { shoppingCart }
            <Products />
          </Route>
          <Route path={ Routes.ShoppingCart }>
            <ShoppingCart />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App