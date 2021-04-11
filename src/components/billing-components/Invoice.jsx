import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { itemsSoldList } from "./BillForm";
import { invoice } from "./CustomerForm";
import { Link } from "react-router-dom";

function Invoice() {
  const tableRows = itemsSoldList;
  //console.log(tableRows);
  const renderTableColoumn = (tableRows, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{tableRows.item_name}</td>
        <td>{tableRows.quantity}</td>
        <td>₹ {tableRows.selling_price}</td>
        <td>₹ {(tableRows.quantity * tableRows.selling_price).toFixed(2)}</td>
      </tr>
    );
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body p-0">
              <div class="row p-5">
                <div class="col-md-6">
                  <img
                    src="http://via.placeholder.com/400x90?text=logo"
                    alt=""
                  />
                </div>

                <div class="col-md-6 text-right">
                  <p class="font-weight-bold mb-1">
                    Invoice #{invoice.invoice_no}
                  </p>
                  <p class="text-muted">
                    Date: {new Date().toLocaleDateString()}
                  </p>
                  <p class="text-muted">
                    Time: {new Date().toLocaleTimeString()}
                  </p>
                </div>
              </div>

              <hr class="my-5" />

              <div class="row pb-5 p-5">
                <div class="col-md-6">
                  <p class="font-weight-bold mb-4">Customer Information</p>
                  <p class="mb-1">{invoice.customer_name}</p>
                  <p>{invoice.mobile_no}</p>
                  <p class="mb-1">{invoice.email_id}</p>
                  <p class="mb-1"></p>
                </div>

                <div class="col-md-6 text-right">
                  <p class="font-weight-bold mb-4">Payment Details</p>
                  <p class="mb-1">
                    <span class="text-muted">Payment Type: </span> Cash
                  </p>
                </div>
              </div>

              <div class="row p-5">
                <div class="col-md-12">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="border-0 text-uppercase small font-weight-bold">
                          S. No.
                        </th>
                        <th class="border-0 text-uppercase small font-weight-bold">
                          Item
                        </th>
                        <th class="border-0 text-uppercase small font-weight-bold">
                          Quantity
                        </th>
                        <th class="border-0 text-uppercase small font-weight-bold">
                          Unit Cost
                        </th>
                        <th class="border-0 text-uppercase small font-weight-bold">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>{tableRows.map(renderTableColoumn)}</tbody>
                  </table>
                </div>
              </div>

              <div class="d-flex flex-row-reverse bg-dark text-white p-4">
                <div class="py-3 px-5 text-right">
                  <div class="mb-2">Grand Total</div>
                  <div class="h2 font-weight-light">
                    ₹ {localStorage.getItem("totalAmount")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "435px" }}>
        <button
          style={{ width: "150px", margin: "40px" }}
          className="btn btn-success btn-inv"
          onClick={() => {
            window.print();
            localStorage.removeItem("totalAmount");
            localStorage.removeItem("sumOfQuantity");
          }}
        >
          Print Bill
        </button>
        <button
          style={{ width: "150px", left: "-20px" }}
          className="btn btn-success btn-inv"
          onClick={() => {
            localStorage.removeItem("totalAmount");
            localStorage.removeItem("sumOfQuantity");
            window.location.replace("/billing");
            window.history.pushState("");
          }}
        >
          New Bill
        </button>
      </div>
    </div>
  );
}

export default Invoice;
