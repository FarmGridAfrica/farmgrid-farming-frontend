import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SinglePlan from "./SinglePlan";

const Plan = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/:id`}>
        <SinglePlan />
      </Route>
    </Switch>
  );
};

export default Plan;
