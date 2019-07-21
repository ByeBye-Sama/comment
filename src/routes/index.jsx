import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import { DashboardLayout } from "../features/dashboard";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/comments" component={DashboardLayout} />
        <Redirect exact from="/" to="/comments" />
      </Switch>
    </Router>
  )
}

export {
  Routes
}
