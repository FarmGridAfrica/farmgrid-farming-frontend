import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SingleFarm from "./SingleFarm";

const Farm = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/:id`}>
        <SingleFarm />
      </Route>
    </Switch>
  );
};

export default Farm;
