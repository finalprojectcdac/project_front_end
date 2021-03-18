import React, { useState } from "react";
import user from "../../service/serviceLayer";

function CustomerForm() {
  const [customerDetails, setCustomerDetails] = useState({
    mobile_no: "",
    customer_name: "",
    email_id: "",
    amount_received: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "mobile_no" && value === "") {
      setCustomerDetails({
        mobile_no:"",
        customer_name:"",
        email_id:"",
        amount_received:""
      })
    }
    else {
      setCustomerDetails((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    }
  }
  function handleBlur(event) {
    const mobile_no = event.target.value;
    if (mobile_no !== 0) {
      console.log("blur called with mobile no: " + mobile_no);
      user.getCustomerDetails(mobile_no).then((resp) => {
        const status = resp.data.status;
        console.log(status);
        if (status !== 0) {
          const {
            mobile_no,
            customer_name,
            email_id,
          } = resp.data.contentinvoice;
          setCustomerDetails({
            mobile_no: mobile_no,
            customer_name: customer_name,
            email_id: email_id,
            amount_received: "",
          });
        } else {
          setCustomerDetails({
            mobile_no: mobile_no,
            customer_name: "",
            email_id: "",
            amount_received: "",
          });
        }
      });
    }
  }

  //check function for debuging purpose
  function checkAllObj() {
    console.log("checking of variable will be done here");
    console.log("Details:-");
    console.log(customerDetails);
  }
  return (
    <div className="customer-form crd">
      <p
        className="text-color"
        style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "0px" }}
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
              id="amount_received"
              placeholder="Amount Received"
              name="amount_received"
            />
          </div>
        </div>
      </form>
      <div style={{ paddingLeft: "900px", paddingBottom: "20px" }}>
      <button
          class="btn btn-success btn-inv"
          type="submit"
          // onClick={}
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
      </button> */}
      </div>
    </div>
  );
}

export default CustomerForm;
