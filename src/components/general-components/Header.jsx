import React from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "../../auth-directory/auth";
import UserProfile from "../general-components/UserProfile";
import Alert from "react-s-alert";

function Header() {
  let history = useHistory();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  function handleLogout() {
    auth.unsetUser();
    auth.unsetAdmin();
    auth.logout(() => {
      history.push("/logout");
    });
    Alert.success("Successfully logged out!");
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link
            to="/welcome"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            IBS <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>

      <span
        style={{
          position: "absolute",
          top: "0px",
          left: "1030px",
          color: "white",
        }}
        hidden={!isAuthenticated}
      >
        <UserProfile />
      </span>
      <button
        className="btn btn-danger logout-button"
        onClick={handleLogout}
        hidden={!isAuthenticated}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
