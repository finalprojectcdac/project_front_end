import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function UserTable(props) {
  const tableRows = props.tableRows;

  const renderTableColoumn = (tableRows, index) => {
    return (
      <tr key={index}>
        <th scope="row">{tableRows.empId}</th>
        <td>
          {tableRows.name}
        </td>
        <td>{tableRows.email}</td>
        <td>{tableRows.privilege}</td>
      </tr>
    );
  };

  return (
    <div className="user-table crd">
      <span>
        <p
          className="text-color"
          style={{ textAlign: "center", paddingTop: "0px", paddingTop: "10px" }}
        >
          Employee Data
        </p>
        <Link to="/monitoring">
          <button
            className="btn btn-inv btn-success btn-sm"
            style={{
              position: "absolute",
              left: "1010px",
              top: "10px",
            }}
          >
            <b>CLOSE</b>
          </button>
        </Link>
      </span>
      <div>
        <ReactBootStrap.Table striped bordered className="table-sm">
          <thead className="thead-dark">
            <tr>
              <th className="sticky-heading">Employee ID</th>
              <th className="sticky-heading">Employee Name</th>
              <th className="sticky-heading">Email ID</th>
              <th className="sticky-heading">Privilege</th>
            </tr>
          </thead>
          <tbody>{tableRows.map(renderTableColoumn)}</tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default UserTable;
