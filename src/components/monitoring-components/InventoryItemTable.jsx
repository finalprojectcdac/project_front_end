import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import user from "../../service/serviceLayer";

function InventoryItemTable(props) {
  const tableRows = props.tableRows;

  const renderTableColoumn = (tableRows, index) => {
    return (
      <tr key={index}>
        <td>{tableRows.item_code}</td>
        <td>{tableRows.brand}</td>
        <td>{tableRows.item_name}</td>
        <td>{tableRows.unit_measurement}</td>
        <td>{tableRows.quantity}</td>
        <td>{tableRows.unit_price}</td>
        <td>{tableRows.selling_price}</td>
      </tr>
    );
  };

  const emptyRows = (
    <tr style={{ height: "30px" }}>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );

  return (
    <div className="monitoring-table">
      <ReactBootStrap.Table striped bordered className="table-sm">
        <thead className="thead-dark">
          <tr>
            <th className="sticky-heading">Item Code</th>
            <th className="sticky-heading">Brand</th>
            <th className="sticky-heading">Item Name</th>
            <th className="sticky-heading">Unit Measurement</th>
            <th className="sticky-heading">Quantity</th>
            <th className="sticky-heading">Cost Price</th>
            <th className="sticky-heading">Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(renderTableColoumn)}
          {emptyRows}
          {emptyRows}
          {emptyRows}
          {emptyRows}
          {emptyRows}
          {emptyRows}
          {emptyRows}
          {emptyRows}
          {emptyRows}
          {emptyRows}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default InventoryItemTable;
