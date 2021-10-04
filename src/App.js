import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/login" exact component={LoginForm} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/" exact component={LoginForm} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
