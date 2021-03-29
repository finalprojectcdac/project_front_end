import React from "react";
import HorizontalNavbar from "../general-components/HorizontalNavbar";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <HorizontalNavbar />
      <Link to="/inventory">Inventory</Link>
      <hr></hr>
      <Link to="/billing">Billing</Link>
      <hr></hr>
      <Link to="/monitoring">Monitoring</Link>
    </div>
  );
}

export default Welcome;
