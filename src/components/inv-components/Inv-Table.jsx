
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {inventoryDetails} from './inv-form2';

function Inv_Table() {

    const renderTableColoumn = (inventoryDetails,index) => {
    return (
        <tr>
            <td>{inventoryDetails.item_code}</td>
            <td>{inventoryDetails.brand}</td>
            <td>{inventoryDetails.item_name}</td>
            <td>{inventoryDetails.unit_measurement}</td>
            <td>{inventoryDetails.stock_entry_date}</td>
            <td>{inventoryDetails.item_category}</td> 
            <td>{inventoryDetails.supplier_invoice_no}</td>
            <td>{inventoryDetails.unit_price}</td>
            <td>{inventoryDetails.total_value}</td>
            <td>{inventoryDetails.quantity}</td>
	
        </tr>
    );
}

    return (
        <div className=".inv-table">
            <ReactBootStrap.Table striped bordered >
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Brand</th>
            <th>Item Name</th>
            <th>Unit Measurement</th>
            <th>Date</th>
            <th>Item Category</th>
            <th>Supplier Ivoice No</th>
            <th>Unit Price</th>
            <th>Total Value</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventoryDetails.map(renderTableColoumn)}
        </tbody>
      </ReactBootStrap.Table>
        </div>
    );
}

export default Inv_Table;