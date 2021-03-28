import React from "react";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
import Alert from "react-s-alert";

function ProtectedRoute({ component: Component, path: path, ...rest }) {
  const history = useHistory();
  const isPrivileged = localStorage.getItem("isAdmin");
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (path === "/monitoring") {
    if (isPrivileged) {
      return (
        <Route
          {...rest}
          render={() => {
            if (isAuthenticated) {
              return <Component />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      );
    }else if(!isAuthenticated) {
      return <Redirect to="/login" />;
    } else {
      Alert.error(
        "You do not have administrator rights. Please login as administrator!"
      );
      return <Redirect to={history.goBack()} />;
    }
  } else {
    return (
      <Route
        {...rest}
        render={() => {
          if (isAuthenticated) {
            return <Component />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  }
}

export default ProtectedRoute;
