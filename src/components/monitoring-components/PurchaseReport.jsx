import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function PurchaseReport(props) {

    const renderTableColoumn = (supplier, index) => {
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
    <div className="purchasereport-table" hidden={props.hidePurchaseTable}>
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
  );
}

export default PurchaseReport;
