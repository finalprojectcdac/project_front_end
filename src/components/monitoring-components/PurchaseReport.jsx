import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function PurchaseReport(props) {
  let arr = [];
  let totalPurchase = 0;
  const renderTableColoumn = (supplier, index) => {
    arr.push(supplier.supplier_invoice_value);
    for (let i = arr.length - 1; i < arr.length; i++) {
      totalPurchase += parseFloat(arr[i]);
    }
    return (
      <tr key={index}>
        <td>{supplier.supplier_name}</td>
        <td>{supplier.supplier_code}</td>
        <td>{supplier.supplier_invoice_number}</td>
        <td>{supplier.purchase_date}</td>
        <td>₹ {supplier.supplier_invoice_value}</td>
      </tr>
    );
  };

  return (
    <div hidden={props.hidePurchaseTable}>
      <div className="purchasereport-table">
        <ReactBootStrap.Table striped bordered className="table-sm">
          <thead className="thead-dark">
            <tr>
              <th className="sticky-heading">Supplier Name</th>
              <th className="sticky-heading">Supplier Code</th>
              <th className="sticky-heading">Supplier Invoice No.</th>
              <th className="sticky-heading">Purchase Date</th>
              <th className="sticky-heading">Invoice Value</th>
            </tr>
          </thead>
          <tbody>{props.purchaseReport.map(renderTableColoumn)}</tbody>
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
                  TOTAL PURCHASES
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "930px",
                    width: "fit-content",
                  }}
                >
                  ₹ {totalPurchase}
                </div>
              </th>
            </tr>
          </thead>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default PurchaseReport;
