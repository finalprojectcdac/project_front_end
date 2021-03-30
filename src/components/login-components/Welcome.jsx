import React from "react";
import HorizontalNavbar from "../general-components/HorizontalNavbar";
import VerticalNavbar from "../general-components/VerticalNavbar";

function Welcome() {
  return (
    <div>
      <HorizontalNavbar />
      <VerticalNavbar />
      {/* <br />
      <div style={{}}>
        <div style={{ width: "400px", marginBottom:"5px" }}>
          <Link
            to="/inventory"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <nav
              class="navbar navbar-dark bg-dark"
              style={{
                height: "70px",
                fontFamily: "merriWeather",
                fontSize: "20px",
                color: "ivory",
                textAlign:"center"
              }}
            >
              Inventory
            </nav>
          </Link>
        </div>
        <div style={{ width: "400px", marginBottom:"5px" }}>
          <Link
            to="/billing"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <nav
              class="navbar navbar-dark bg-dark"
              style={{
                height: "70px",
                fontFamily: "merriWeather",
                fontSize: "20px",
                color: "ivory",
                textAlign:"center"
              }}
            >
              Billing
            </nav>
          </Link>
        </div>
        <div style={{ width: "400px", marginBottom:"5px" }}>
          <Link
            to="/monitoring"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <nav
              class="navbar navbar-dark bg-dark"
              style={{
                height: "70px",
                fontFamily: "merriWeather",
                fontSize: "20px",
                color: "ivory",
                textAlign:"center"
              }}
            >
              Monitoring
            </nav>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Welcome;
