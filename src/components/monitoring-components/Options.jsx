import React from "react";
import { Link } from "react-router-dom";

function Options() {
  return (
    <div className="options">
    <Link to="/monitoring/checkinventory" style={{position:"relative",width:"max-content"}}>
        <button class="btn btn-success btn-inv" type="submit" >
          Check Inventory
        </button>
      </Link>
      <Link to="/monitoring/updateinventory">
        <button class="btn btn-success btn-inv" type="submit">
          Update Inventory
        </button>
      </Link>
      <Link to="/monitoring/generatereport">
        <button class="btn btn-success btn-inv" type="submit">
          Generate Reports
        </button>
      </Link>
      <Link to="/monitoring/checkemployees">
        <button class="btn btn-success btn-inv" type="submit">
          Check Employees
        </button>
      </Link>
      <Link to="/monitoring/manageemployees">
        <button class="btn btn-success btn-inv" type="submit">
          Manage Employees
        </button>
      </Link>
    </div>
  );
}

export default Options;
