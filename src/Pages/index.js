import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Referral from "./Referral";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Plan from "./Plan";

const Pages = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Referral} />
        <Route path="/referral" component={Referral} />
        <Route path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/plan" component={Plan} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
