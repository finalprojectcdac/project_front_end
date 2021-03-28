import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function InventoryItemTable(props) {
  const tableRows = props.tableRows;

  const renderTableColoumn = (tableRows, index) => {
    function checkPrice(selling_price) {
      if (selling_price >= 0) {
        return selling_price;
      } else {
        return "NOT SET";
      }
    }

    return (
      <tr key={index}>
        <th scope="row">{tableRows.item_code}</th>
        <td>{tableRows.brand}</td>
        <td>{tableRows.item_name}</td>
        <td>{tableRows.quantity}</td>
        <td>{tableRows.unit_measurement}</td>
        <td>₹ {tableRows.unit_price}</td>
        <td>₹ {checkPrice(tableRows.selling_price)}</td>
      </tr>
    );
  };

  return (
    <div className="inventory-item-table crd">
      <span>
        <p
          className="text-color"
          style={{ textAlign: "center", paddingTop: "0px", paddingTop: "10px" }}
        >
          Inventory Data
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
              <th className="sticky-heading">Item Code</th>
              <th className="sticky-heading">Brand</th>
              <th className="sticky-heading">Item Name</th>
              <th className="sticky-heading">Quantity</th>
              <th className="sticky-heading">Unit Measurement</th>
              <th className="sticky-heading">Cost Price</th>
              <th className="sticky-heading">Selling Price</th>
            </tr>
          </thead>
          <tbody>{tableRows.map(renderTableColoumn)}</tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default InventoryItemTable;
