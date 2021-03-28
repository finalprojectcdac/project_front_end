import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles.css";
import * as ReactBootStrap from "react-bootstrap";

function BillTable(props) {
  const tableRows = props.tableRows;
  const renderTableColoumn = (tableRows, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{tableRows.item_name}</td>
        <td>{tableRows.quantity}</td>
        <td>{tableRows.selling_price}</td>
        <td>{(tableRows.quantity * tableRows.selling_price).toFixed(2)}</td>
      </tr>
    );
  };

  return (
    <div className="bill-table">
      <ReactBootStrap.Table striped bordered className="table-sm">
        <thead className="thead-dark">
          <tr>
            <th className="sticky-heading">S. No.</th>
            <th className="sticky-heading">Item</th>
            <th className="sticky-heading">Quantity</th>
            <th className="sticky-heading">Price (per Unit)</th>
            <th className="sticky-heading">Total</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(renderTableColoumn)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default BillTable;
