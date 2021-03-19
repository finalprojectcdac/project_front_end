import React from "react";
import { Link } from "react-router-dom";


function HorizontalNavbar(props) {
  return (
    <header>
      <p style={{ fontFamily: "Merriweather", fontSize: "21px" }}>
        INVENTORY & BILLING MANAGEMENT SYSTEM
      </p>
      <Link to="/logout">
        <button className="btn btn-danger">Logout</button>
      </Link>
    </header>
  );
}

export default HorizontalNavbar;
