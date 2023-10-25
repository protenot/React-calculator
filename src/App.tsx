import React, { useContext, useState } from "react";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { authWithEmailAndPassword } from "./firebase/authWithEmailAndPassword";
import { app } from "./firebase/firebase";
import { UserCredential } from "firebase/auth";
import { Authorization } from "./components/Authorization";
import { useLocation } from "react-router-dom";
import {  AuthProvider, useAuthContext } from "./components/AuthContext";
import { Settings } from "./components/Settings";
app;

interface RouteParams {
  userEmail: string | null;
  isAuthenticated:boolean;
}
function App() {
  
  const location = useLocation<RouteParams>();
  const userEmail = location.state ? location.state.userEmail : null;
 // const isAuthenticated=location.state ? location.state.isAuthenticated : false;
   const {isAuthenticated}=useAuthContext();
  console.log(isAuthenticated) 
  return (
   
    <div className="App">
      <header className="App-header">
        <div className="App-header-auth">
          <h1 className="header-title">Simple Calculator</h1>
          <p className="auth-name">
            {" "}
            {userEmail ? <>{userEmail.replace(/"/g, "")}</> : "Unauthorized"}
          </p>
        </div>
        {userEmail?(
        <div className="navigation">
          <Link to="/">Main page</Link>
          <Link to="/auth">Authorization</Link>
         
          <Link to="/settings">Settings</Link>
          <Link to="/trends">Trends</Link>
          <Link to="/about">Information</Link>
        </div>):
        (<div className="navigation">
        <Link to="/">Main page</Link>
        <Link to="/auth">Authorization</Link>
        <Link to="/about">Information</Link>
      </div>)
}
      </header>
      <div>
        <Switch>
          <Route exact path="/">
            <div>Главная страница</div>
          </Route>
          <Route exact path="/auth" component= {Authorization} />
          <Route exact path="/settings" component= {Settings} />
          
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="*" render={() => <div>Не найдено 404</div>} />
        </Switch>
      </div>
    </div>
   
  );
}
export default App;
