import React, { useState } from "react";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Switch, Route, Link } from "react-router-dom";
import { authWithEmailAndPassword } from "./firebase/authWithEmailAndPassword";
import { app } from "./firebase/firebase";
import { UserCredential } from "firebase/auth";
app;
function App() {
  const [inputEmailValue, setInputEmailValue] = useState<string>("");
  const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const handleButtonClick = async () => {
    const userCredential: UserCredential | void =
      await authWithEmailAndPassword(inputEmailValue, inputPasswordValue);

    /*  if (userCredential && userCredential.user) {
   console.log('+++----'+  JSON.stringify(userCredential.user.email))
   } */
    if (userCredential) {
      JSON.stringify(userCredential.user.email);
      console.log("+++" + userCredential.user.email);
      setUserEmail(JSON.stringify(userCredential.user.email));
    }

    setInputEmailValue(inputEmailValue);
    setInputPasswordValue(inputPasswordValue);
    console.log("Email:", setInputEmailValue);
    console.log("Password:", setInputPasswordValue);

    setInputEmailValue("");
    setInputPasswordValue("");
  };

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
              <Input
                onInputChange={setInputEmailValue}
                placeholderText={"Input email"}
                labelText="Login"
              />
              <Input
                onInputChange={setInputPasswordValue}
                placeholderText={"Input password"}
                labelText={"Password"}
              />
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
