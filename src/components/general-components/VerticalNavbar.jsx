import React from "react";
import { Link } from "react-router-dom";

function VerticalNavbar() {
  return (
    <div className="verticalNavbar">
      <ul className="sticky-verticalNavbar" style={{ width: "180px" }}>
        <Link to="/inventory" style={{ textDecoration: "none" }}>
          <li className="text-color" style={{ width: "180px" }}>
            <a>Inventory</a>
          </li>
        </Link>
        <Link to="/billing" style={{ textDecoration: "none" }}>
          <li className="text-color" style={{ width: "180px" }}>
            <a>Billing</a>
          </li>
        </Link>
        <Link to="/monitoring" style={{ textDecoration: "none" }}>
          <li className="text-color" style={{ width: "180px" }}>
            <a>Monitoring</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default VerticalNavbar;
