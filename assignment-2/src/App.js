import React, { useState, useEffect, Component }  from 'react';
import logo from './logo.svg';
import handbag from './handbag.svg';
import userIcon from './user.svg';
import loginIcon from './login.svg';
import './App.css';
import './index.css';
import './style.min.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Category from './pages/Category';
import Details from './pages/Details';
import User from "./pages/user";
import Profile from "./pages/user/components/Profile";
import './index.css';
 

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Navigation (){
  return (
    <>
      <Router>
        <div className="Nav"> 
          {/* Nav Top */}
          <ul className="topHeader">
            <div className="left">
              <li><Link to="/profile"><img src={userIcon}/> Profile </Link> </li>
            </div>
            <div className="right">
              <li><Link to="/user"><img src={loginIcon}/> </Link> </li>
              <li><Link to="/cart"><img src={handbag}/> </Link> </li>
            </div>
          </ul>
          <ul className="navigation">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/category/111">New Arrivals</Link> </li>
            <li> <Link to="/category/222">Best Sellers</Link> </li>
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
            <Route path="/user">
              <User />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  )
}

function App() {
  return (
    <header>
      {/* <FunctionVsClass/> */}
      <div className="logo">
        <img src={logo}/> 
      </div>

        <Navigation />

    </header>
  );
}

export default App;
