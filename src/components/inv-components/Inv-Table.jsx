import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function Inv_Table(props) {
    const tableRows = props.tableRows;
    const renderTableColoumn = (tableRows,index) => {
    return (
      <tr key={index}>
        <th scope="row">{tableRows.item_code}</th>
        <td>{tableRows.brand}</td>
        <td>{tableRows.item_name}</td>
        <td>{tableRows.item_category}</td>
        <td>{tableRows.unit_measurement}</td>
        <td>{tableRows.quantity}</td>
        <td>{tableRows.unit_price}</td>
        <td>{tableRows.quantity * tableRows.unit_price}</td>
      </tr>
    );
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
            {tableRows.map(renderTableColoumn)}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
}

export default Inv_Table;