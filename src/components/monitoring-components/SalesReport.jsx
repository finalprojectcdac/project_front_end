import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function SalesReport(props) {
  let arr = [];
  let totalSale = 0;
  const renderTableColoumn = (customer, index) => {
    arr.push(customer.invoice_value);
    for (let i = arr.length - 1; i < arr.length; i++) {
      totalSale += parseFloat(arr[i]);
    }
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
    <div hidden={props.hideSalesTable}>
      <div className="salesreport-table">
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
      <div
        style={{
          position: "absolute",
          top: "496px",
          left: "30px",
          width: "1064px",
        }}
      >
        <ReactBootStrap.Table striped bordered className="table-sm">
          <thead className="thead-dark">
            <tr>
              <th style={{ height: "25px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "470px",
                    width: "fit-content",
                  }}
                >
                  TOTAL SALES
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "930px",
                    width: "fit-content",
                  }}
                >
                  ₹ {totalSale}
                </div>
              </th>
            </tr>
          </thead>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default SalesReport;
