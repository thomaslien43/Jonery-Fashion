import React from 'react';
import './App.css';
import './responsive.css'
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeView from './screens/HomeView';
import SingleProduct from './screens/SingleProduct';
import Login from './screens/Login';
import Register from './screens/Register';
import CartView from './screens/CartView';
import ShippingView from './screens/ShippingView';
import ProfileView from './screens/ProfileView';
import PaymentView from './screens/PaymentView';
import PlaceOrderView from './screens/PlaceOrderView';
import OrderView from './screens/OrderView';
import NotFound from './screens/NotFound';
import PrivateRouter from "./PrivateRouter";
import Categories from './screens/CategoriesView';
import QnAView from './screens/QnAView';
import AboutUs from './screens/AboutUs';
import Contact from './screens/ContactView';


const App = () => {
  return (
   <Router>
    <Switch>
      <Route path="/" component={HomeView} exact />
      <Route path="/search/:keyword" component={HomeView} exact />
      <Route path="/page/:pagenumber" component={HomeView} exact />
      <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeView}
          exact
      />
      <Route path="/products/:id" component={SingleProduct} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRouter path="/profile" component={ProfileView} />
      <Route path="/cart/:id?" component={CartView} />
      <PrivateRouter path="/shipping" component={ShippingView} />
      <PrivateRouter path="/payment" component={PaymentView} />
      <PrivateRouter path="/placeorder" component={PlaceOrderView} />
      <PrivateRouter path="/order/:id" component={OrderView} />
      <Route path="/categories" component={Categories} />
      <Route path="/qna" component={QnAView} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
   </Router>
  );
}

export default App;
