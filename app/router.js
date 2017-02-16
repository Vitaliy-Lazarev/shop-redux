import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import ProductListContainer from './components/containers/product-list-container';
import ProductProfileContainer from './components/containers/product-profile-container';
import ProductCartContainer from './components/containers/product-cart-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="products">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={ProductListContainer} />
          </Route>
          <Route path=":productId" component={ProductProfileContainer} />
          <Route component={SearchLayoutContainer} />

        </Route>
      <Route path="/cart" component={ProductCartContainer} />
    </Route>
  </Router>
);
