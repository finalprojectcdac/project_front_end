import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function InvTable(props) {
  const tableRows = props.tableRows;
  const renderTableColoumn = (tableRows, index) => {
    return (
      <tr key={index}>
        <th scope="row">{tableRows.item_code}</th>
        <td>{tableRows.brand}</td>
        <td>{tableRows.item_name}</td>
        <td>{tableRows.item_category}</td>
        <td>{tableRows.unit_measurement}</td>
        <td>{tableRows.quantity}</td>
        <td>{tableRows.unit_price}</td>
        <td>{(tableRows.quantity * tableRows.unit_price).toFixed(2)}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              props.onDelete(index);
            }}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="inv-table">
      <ReactBootStrap.Table striped bordered className="table-sm">
        <thead className="thead-dark">
          <tr>
            <th className="sticky-heading">Item Code</th>
            <th className="sticky-heading">Brand</th>
            <th className="sticky-heading">Item Name</th>
            <th className="sticky-heading">Item Category</th>
            <th className="sticky-heading">Unit Measurement</th>
            <th className="sticky-heading">Quantity</th>
            <th className="sticky-heading">Unit Price</th>
            <th className="sticky-heading">Total Value</th>
            <th className="sticky-heading">Action</th>
          </tr>
        </thead>
        <tbody>{tableRows.map(renderTableColoumn)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default InvTable;
