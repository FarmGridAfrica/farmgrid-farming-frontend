import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
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
      <Route path={`${path}/profile`}>
        <Profile />
      </Route>
    </Switch>
  );
};

export default Auth;
