import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

function InventoryItemTable(props) {
  const tableRows = props.tableRows;
  let x = [];
  let y = [];

  
  const [sellingPrice, setSellingPrice] = useState(y);

  function handleChange(event) {
    console.log(event.target.value);
    console.log(sellingPrice);
    y = () => {
      for (let i = 0; i < props.tableRows.length; i++) {
        x.push(props.tableRows[i].selling_price);
      }
    };
  }

  const renderTableColoumn = (tableRows, index) => {
    // console.log(sellingPrice);
    return (
      <tr key={index} style={{ backgroundColor: "#E2E2E2" }}>
        <td>
          <input value={tableRows.item_code} disabled />
        </td>
        <td>
          <input value={tableRows.brand} disabled />
        </td>
        <td>
          <input value={tableRows.item_name} disabled />
        </td>
        <td>
          <input value={tableRows.unit_measurement} disabled />
        </td>
        <td>
          <input value={tableRows.quantity} disabled />
        </td>
        <td>
          <input value={tableRows.unit_price} disabled />
        </td>
        <td contentEditable suppressContentEditableWarning>
          <input value={tableRows.selling_price} onChange={handleChange} />
        </td>
      </tr>
    );
  };

  const emptyRows = (
    <tr style={{ height: "30px", backgroundColor: "#E2E2E2" }}>
      <td>
        <input disabled />
      </td>
      <td>
        <input disabled />
      </td>
      <td>
        <input disabled />
      </td>
      <td>
        <input disabled />
      </td>
      <td>
        <input disabled />
      </td>
      <td>
        <input disabled />
      </td>
      <td>
        <input disabled />
      </td>
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
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default InventoryItemTable;
