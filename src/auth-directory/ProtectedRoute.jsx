import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
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
          render={(props) => {
            if (isAuthenticated) {
              return <Component {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
      );
    } else if (!isAuthenticated) {
      return <Redirect to="/" />;
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
            return <Redirect to="/" />;
          }
        }}
      />
    );
  }
}

export default ProtectedRoute;
