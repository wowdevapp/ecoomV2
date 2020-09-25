import React from "react";
import {BrowserRoute as Router,Switcher,Route}  from  'react-router-dom';
// pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
export default function App() {
  return(
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route
        path="/products/:id"
        children={<ProductDetails></ProductDetails>}
      ></Route>

      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
  );
}
