import React, { useState, useEffect, Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Details from './pages/Details';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation (){
  return (
    <>
      <Router>
        <div>
          {/* Element */}
          <ul className="navigation">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/category/111">New Arrivals</Link> </li>
            <li> <Link to="/category/222">Best Sellers</Link> </li>
            <li className="cart"> <Link to="/cart">Cart</Link> </li>
          </ul>

          {/* Link */}
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>  
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/detail">
              <Details/>
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  )
}

function App() {
  return (
    <>
      {/* <FunctionVsClass/> */}
      <div className="logo">
        <img src={logo}/> 
      </div>
      <Navigation/>
    </>
  );
}

export default App;
