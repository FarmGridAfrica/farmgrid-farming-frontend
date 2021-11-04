import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Auth = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/register`}>
        <Register />
      </Route>
    </Switch>
  );
};

export default Auth;
