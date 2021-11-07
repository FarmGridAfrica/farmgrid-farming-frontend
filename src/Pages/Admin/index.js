import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddFarm from "./AddFarm";

const Admin = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Login />
      </Route>
      <Route path={`${path}/dashboard`}>
        <Dashboard />
      </Route>
      <Route path={`${path}/addfarm`}>
        <AddFarm />
      </Route>
    </Switch>
  );
};

export default Admin;
