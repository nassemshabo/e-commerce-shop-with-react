import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import HomePage from "./Pages/HomePage/HomPage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import AccountSystem from "./Pages/Signin&Signup/Signin&Signup";

//style
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sginin" component={AccountSystem} />
        {/* 
        
        <Route path="/shop" component={Shop} />
        <Route path="signin" component={SignIn} />
          */}
      </Switch>
    </div>
  );
}
