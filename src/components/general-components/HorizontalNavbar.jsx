import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useHistory } from "react-router-dom";
import auth from "../../auth-directory/auth";
import UserProfile from "./UserProfile";

function HorizontalNavbar(props) {
  let history = useHistory();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  function handleLogout() {
    auth.unsetUser();
    auth.unsetAdmin();
    auth.logout(() => {
      history.push("/logout");
    });
  }

  return (
    <header>
      <p style={{ fontFamily: "Merriweather", fontSize: "21px" }}>
        INVENTORY & BILLING MANAGEMENT SYSTEM
      </p>
      <span
        style={{ position: "absolute", top: "0px", left: "1030px" }}
        hidden={!isAuthenticated}
      >
        <UserProfile />
      </span>
      <button
        className="btn btn-danger"
        onClick={handleLogout}
        hidden={!isAuthenticated}
      >
        Logout
      </button>
    </header>
  );
}

export default HorizontalNavbar;
