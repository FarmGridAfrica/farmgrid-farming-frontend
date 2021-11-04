import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const Dashboard = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      {/* <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/register`}>
        <Register />
      </Route> */}
    </Switch>
  );
};

export default Dashboard;
