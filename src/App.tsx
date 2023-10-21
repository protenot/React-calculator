import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="header-title">
          Simple Calculator
        </p>
        <div className="navigation">
          <Link to="React-calculator/">Main page</Link>
          <Link to="React-calculator/auth">Authorization</Link>
          <Link to="React-calculator/about">Information</Link>
        </div>
      </header>
      <div>
        <Switch>
          <Route exact path="/">
            <div>Главная страница</div>
          </Route>
          <Route exact path="/auth">
            <div>Login</div>
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
