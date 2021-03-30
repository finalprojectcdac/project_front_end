import React from "react";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="hero-container">
      <h1>INVENTORY AND BILLING SYSTEM</h1>
      <p>For industrial use only.</p>
      <div className="hero-btns">
        <Link to="/register">
          <button className="btn btn--outline btn--large">REGISTER</button>
        </Link>
        <Link to="/login">
          <button className="btn btn--primary btn--large">
            LOGIN<i className="fas fa-user-circle"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Body;
