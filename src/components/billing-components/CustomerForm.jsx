import React, { useState } from "react";
import user from "../../service/serviceLayer";
import {totalAmount} from"./BillForm";

let invoice = {
  invoice_no: "",
  mobile_no: "",
  customer_name: "",
  invoice_value: "",
  email_id: "",
  billing_date: "",
};


function CustomerForm(props) {
  const [customerDetails, setCustomerDetails] = useState({
    mobile_no: "",
    customer_name: "",
    email_id: "",
    invoice_value: "",
    billing_date: "",
  });
 
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "mobile_no" && value === "") {
      setCustomerDetails({
        mobile_no: "",
        customer_name: "",
        email_id: "",
        invoice_value: "",
        billing_date: "",
      });
    } else {
      setCustomerDetails((prevValue) => {
        return {
          ...prevValue,
          [name]: value,
          billing_date:
            new Date().getFullYear().toString() +
            "-" +
            (new Date().getMonth() + 1).toString() +
            "-" +
            new Date().getDate().toString(),
        };
      });
    }
    
  }

  function getCustomerDetails(mobile_no) {
    user.getCustomerDetails(mobile_no).then((resp) => {
      const status = resp.data.status;
      console.log(status);
      if (status !== 0) {
        const { mobile_no, customer_name, email_id } = resp.data.contentinvoice;
        setCustomerDetails({
          mobile_no: mobile_no,
          customer_name: customer_name,
          email_id: email_id,
          invoice_value: "",
          billing_date:
            new Date().getFullYear().toString() +
            "-" +
            (new Date().getMonth() + 1).toString() +
            "-" +
            new Date().getDate().toString(),
        });
      } else {
        setCustomerDetails({
          mobile_no: mobile_no,
          customer_name: "",
          email_id: "",
          invoice_value: "",
          billing_date: "",
        });
      }
    });
  }

  function handleBlur(event) {
    const mobile_no = event.target.value;
    if (mobile_no !== 0) {
      console.log("blur called with mobile no: " + mobile_no);
      getCustomerDetails(mobile_no);
    }
  }

  function handleAdd() {
    invoice = {
      invoice_no: props.billNo,
      mobile_no: customerDetails.mobile_no,
      customer_name: customerDetails.customer_name,
      invoice_value: customerDetails.invoice_value,
      email_id: customerDetails.email_id,
      billing_date: customerDetails.billing_date,
    };
  }

  //check function for debuging purpose
  function checkAllObj() {
    console.log("checking of variable will be done here");
    console.log("Details:-");
    console.log(customerDetails);
    console.log("amaount recived is:")
    console.log(customerDetails.invoice_value);
    console.log(totalAmount);
    console.log(totalAmount<=customerDetails.invoice_value);
  }
  return (
    <div className="customer-form crd">
      <p
        className="text-color"
        style={{
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "0px",
        }}
      >
        Customer Details
      </p>
      <form style={{ width: "50%" }}>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div className="form-group col-md-3">
            <label for="mobile_no">Mobile No.</label>
            <input
              type="text"
              class="form-control"
              id="mobile_no"
              placeholder="Mobile No."
              name="mobile_no"
              onBlur={handleBlur}
              onChange={handleChange}
              value={customerDetails.mobile_no}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="customer_name">Customer Name</label>
            <input
              type="text"
              class="form-control"
              id="customer_name"
              placeholder="Customer Name"
              name="customer_name"
              onChange={handleChange}
              value={customerDetails.customer_name}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="email_id">E-mail ID</label>
            <input
              type="text"
              class="form-control"
              id="email_id"
              placeholder="E-mail ID"
              name="email_id"
              onChange={handleChange}
              value={customerDetails.email_id}
            />
          </div>

          <div className="form-group col-md-3">
            <label for="amount_received">Amount Received</label>
            <input
              type="text"
              class="form-control"
              id="invoice_value"
              placeholder="Amount Received"
              name="invoice_value"
              onChange={handleChange}
              value={customerDetails.invoice_value}
            />
          </div>
        </div>
      </form>
      <div style={{ paddingLeft: "900px", paddingBottom: "20px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleAdd}
        >
          ADD
        </button>
        {/* button created for testing */}
         {/* <button
        class="btn btn-success btn-inv"
        type="submit"
        onClick={checkAllObj}
      >
        check
      </button>  */}
      </div>
    </div>
  );
}

export default CustomerForm;
export { invoice };
