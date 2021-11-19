import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddFarm from "./AddFarm";
import Investments from "./Investments";
import UpdateInvestment from "./Investments/UpdateInvestment";
import Notification from "./Notification";

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
      <Route path={`${path}/farms`} component={Investments} />
      <Route path={`${path}/notification`} component={Notification} />
    </Switch>
  );
};

export default Admin;
