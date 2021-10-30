import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Referral from "./Referral";

const Pages = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Referral} />
        <Route path="/referral" component={Referral} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
