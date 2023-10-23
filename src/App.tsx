import React, { useState } from "react";
import { Input } from "./components/input";
import {Button} from "./components/button" ;
import { Switch, Route, Link } from "react-router-dom";
import { authWithEmailAndPassword } from "./firebase/authWithEmailAndPassword";

function App() {
  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const handleButtonClick = ()=>{
    authWithEmailAndPassword(inputEmailValue, inputPasswordValue);
    console.log('Email:', inputEmailValue);
    console.log('Password:', inputPasswordValue);
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-header-auth">
       <h1 className="header-title">
          Simple Calculator
        </h1>
        <p className="auth-name"> {inputEmailValue ? (
    <>{inputEmailValue}</>
  ) : (
    "Unauthorized"
  )}</p>
        </div>
        <div className="navigation">
          <Link to="/">Main page</Link>
          <Link to="/auth">Authorization</Link>
          <Link to="/about">Information</Link>
          
        </div>
      </header>
      <div>
        <Switch>
          <Route exact path="/">
            <div>Главная страница</div>
          </Route>
          <Route exact path="/auth">
            <div className="login-page">
<Input onInputChange={setInputEmailValue} placeholderText={"Input email"} labelText="Login"/>
<Input onInputChange={setInputPasswordValue}placeholderText={"Input password"} labelText= {"Password"}/>
<Button onClick={handleButtonClick}>Enter</Button>
            </div>
          </Route>
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
