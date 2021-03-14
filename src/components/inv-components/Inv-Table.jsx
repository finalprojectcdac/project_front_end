
import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {inventoryDetails} from './inv-form2';

function Inv_Table() {
    const renderTableColoumn = (inventoryDetails,index) => {
    return (
      <tr key={index}>
        <th scope="row">{inventoryDetails.item_code}</th>
        <td>{inventoryDetails.brand}</td>
        <td>{inventoryDetails.item_name}</td>
        <td>{inventoryDetails.item_category}</td>
        <td>{inventoryDetails.unit_measurement}</td>
        <td>{inventoryDetails.quantity}</td>
        <td>{inventoryDetails.unit_price}</td>
        <td>{inventoryDetails.quantity * inventoryDetails.unit_price}</td>
      </tr>
    );
}

    function refreshTable() { 
      return inventoryDetails.map(renderTableColoumn)
    }

    return (
      <div className="inv-table">
        <ReactBootStrap.Table striped bordered className="table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Item Code</th>
              <th>Brand</th>
              <th className="item-name">Item Name</th>
              <th>Item Category</th>
              <th>Unit Measurement</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {refreshTable}
            {/* {inventoryDetails.map(renderTableColoumn)} */}
          </tbody>
        </ReactBootStrap.Table>
        <button onClick={refreshTable}>test</button>
      </div>
    );
}

export default Inv_Table;