import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

// root components
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// dashboard components

// products
import AddProduct from './components/dashboard/Products/AddProduct';
import ProductsContainer from './components/dashboard/Products/ProductsContainer';
import ProductDetailContainer from './components/dashboard/Products/ProductDetailContainer';

// orders
import OrdersContainer from './components/dashboard/Orders/OrdersContainer';
import OrderDetailContainer from './components/dashboard/Orders/OrderDetailContainer';

// trade shows
import TradeShowsContainer from './components/dashboard/TradeShows/ShowsContainer';


// setting
import Settings from './components/dashboard/Settings';


const route = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}>
        <IndexRedirect to="/dashboard/products" />

        {/*tax rate lists*/} // todo
        <Route path="/dashboard/taxRateLists" component={TradeShowsContainer} />


        {/*trade shows*/}
        <Route path="/dashboard/tradeShows" component={TradeShowsContainer} />
        <Route path="/dashboard/addTradeShow" component={TradeShowsContainer} /> //todo

        {/*products*/}
        <Route path="/dashboard/products" component={ProductsContainer} />
        <Route path="/dashboard/products/:id" component={ProductDetailContainer} />
        <Route path="/dashboard/add-product" component={AddProduct}/>

        {/*orders*/}
        <Route path="/dashboard/orders" component={OrdersContainer} />
        <Route path="/dashboard/orders/:id" component={OrderDetailContainer} />

        {/*settings*/}
        <Route path="/dashboard/settings" component={Settings} />

      </Route>
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

export default route;
