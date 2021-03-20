import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageNotFound from "../pages/404Page";
import TestForm from "./poc-components/TestForm";
import "../styles.css";
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import BillingPage from "../pages/BillingPage";
import LogoutPage from "../pages/LogoutPage";
import MonitoringPage from "../pages/MonitoringPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/inventory" component={InventoryPage} />
        <Route exact path="/billing" component={BillingPage} />
        <Route exact path="/monitoring" component={MonitoringPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/test" component={TestForm} />
        <Route exact path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
