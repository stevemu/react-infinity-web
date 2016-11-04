import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

// root components
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// dashboard components
import AddProduct from './components/dashboard/AddProduct';
import OrdersContainer from './components/dashboard/OrdersContainer';
import OrderDetailContainer from './components/dashboard/OrderDetailContainer';
import ProductsContainer from './components/dashboard/ProductsContainer';
import ProductDetailContainer from './components/dashboard/ProductDetailContainer';
import Settings from './components/dashboard/Settings';


const route = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}>
        <IndexRedirect to="/dashboard/products" />
        <Route path="/dashboard/products" component={ProductsContainer} />
        <Route path="/dashboard/products/:productId" component={ProductDetailContainer} />
        <Route path="/dashboard/orders" component={OrdersContainer} />
        <Route path="/dashboard/orders/:orderId" component={OrderDetailContainer} />
        <Route path="/dashboard/add-product" component={AddProduct}/>
        <Route path="/dashboard/settings" component={Settings} />
      </Route>
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

export default route;
