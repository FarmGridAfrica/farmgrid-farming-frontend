import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const Referral = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path} component={Home} />
    </Switch>
  );
};

export default Referral;
