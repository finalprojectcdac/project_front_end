import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

function SalesReport(props) {
    const renderTableColoumn = (customer, index) => {
        return (
          <tr key={index}>
            <td>{customer.customer_name}</td>
            <td>{customer.mobile_no}</td>
            <td>{customer.invoice_no}</td>
            <td>{customer.billing_date}</td>
            <td>₹ {customer.invoice_value}</td>
          </tr>
        );
      };

  return (
    <div className="salesreport-table" hidden={props.hideSalesTable}>
      <ReactBootStrap.Table striped bordered className="table-sm">
        <thead className="thead-dark">
          <tr>
            <th className="sticky-heading">Customer Name</th>
            <th className="sticky-heading">Customer Mobile No.</th>
            <th className="sticky-heading">Customer Invoice No.</th>
            <th className="sticky-heading">Purchase Date</th>
            <th className="sticky-heading">Invoice Value</th>
          </tr>
        </thead>
        <tbody>{props.salesReport.map(renderTableColoumn)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default SalesReport;