import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import UpdateInvestment from "./UpdateInvestment";

const Farm = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/:id`}>
        <UpdateInvestment />
      </Route>
    </Switch>
  );
};

export default Farm;
