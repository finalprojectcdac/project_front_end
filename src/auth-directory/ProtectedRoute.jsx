import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import auth from "../auth-directory/auth";
import Alert from "react-s-alert";

function ProtectedRoute({ component: Component, path: path, ...rest }) {
  const history = useHistory();
  if (path === "/monitoring") {
    if (auth.isPrivileged()) {
      return (
        <Route
          {...rest}
          render={() => {
            if (auth.isAuthenticated()) {
              return <Component />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      );
    } else {
      Alert.error(
        "You do not have administrator rights. Please login as administrator!"
      );
      return <Redirect to={history.goBack(-1)} />;
      // if (path === "/inventory") {
      //   Alert.error(
      //     "You do not have administrator rights. Please login as administrator!"
      //   );
      //   return <Redirect to="/inventory" />;
      // } else if (path === "/billing") {
      //   Alert.error(
      //     "You do not have administrator rights. Please login as administrator!"
      //   );
      //   return <Redirect to="/billing" />;
      // }
    }
  } else {
    return (
      <Route
        {...rest}
        render={() => {
          if (auth.isAuthenticated()) {
            console.log("hello");
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
