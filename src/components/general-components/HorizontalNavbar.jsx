import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../../auth-directory/auth";

function HorizontalNavbar() {
  let history = useHistory();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  function handleLogout() {
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
