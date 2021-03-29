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
import ProtectedRoute from "../auth-directory/ProtectedRoute";
import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import RegisterPage from "../pages/RegisterPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <ProtectedRoute exact path="/welcome" component={WelcomePage} />
          <ProtectedRoute exact path="/inventory" component={InventoryPage} />
          <ProtectedRoute exact path="/billing" component={BillingPage} />
          <ProtectedRoute exact path="/monitoring" component={MonitoringPage} />
          <ProtectedRoute exact path="/monitoring/checkinventory" component={MonitoringPage} />
          <ProtectedRoute exact path="/monitoring/updateinventory" component={MonitoringPage} />
          <ProtectedRoute exact path="/monitoring/generatereport" component={MonitoringPage} />
          <ProtectedRoute exact path="/monitoring/checkemployees" component={MonitoringPage} />
          <ProtectedRoute exact path="/monitoring/manageemployees" component={MonitoringPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <ProtectedRoute exact path="/test" component={TestForm} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>

      <Alert
        stack={{ limit: 3 }}
        timeout={3000}
        position="top-right"
        effect="slide"
        offset={65}
      />
    </div>
  );
}

export default App;
