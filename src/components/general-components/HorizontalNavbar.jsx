import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../../auth-directory/auth";

function HorizontalNavbar() {
  let history = useHistory();
  function handleLogout() {
    auth.logout(() => {
      history.push("/logout");
    });
  }

  return (
    <header>
      <p style={{ fontFamily: "Merriweather", fontSize: "21px" }}>
        INVENTORY & BILLING MANAGEMENT SYSTEM
      </p>
      <button className="btn btn-danger" onClick={handleLogout} hidden={!auth.isAuthenticated()}>
        Logout
      </button>
    </header>
  );
}

export default HorizontalNavbar;
