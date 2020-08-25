import React from "react";
import { Switch, Route } from "react-router-dom";
import { appURLS } from "../utils/Globals";
import Home from "../modules/home/Home";
import Details from "../modules/details/Details";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={appURLS.HOME}>
        <Home />
      </Route>
      <Route exact path={appURLS.DETAILS}>
        <Details />
      </Route>
    </Switch>
  );
};

export default Routes;
