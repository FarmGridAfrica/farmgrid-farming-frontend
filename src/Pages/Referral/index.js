import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import ViewReferral from "./ViewReferral";

const Referral = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/getreferral`}>
        <ViewReferral />
      </Route>
    </Switch>
  );
};

export default Referral;
