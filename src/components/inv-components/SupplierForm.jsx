import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";

let supplierObj = {};

function SupplierForm() {
  const [details, setDetails] = useState({
    supplier_name: "",
    supplier_code: "",
    supplier_invoice_number: "",
    supplier_invoice_value: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevValue) => {
      if (name === "supplier_name") {
        return {
          supplier_name: value,
          supplier_code: prevValue.supplier_code,
          supplier_invoice_number: prevValue.supplier_invoice_number,
          supplier_invoice_value: prevValue.supplier_invoice_value,
        };
      } else if (name === "supplier_code") {
        return {
          supplier_name: prevValue.supplier_name,
          supplier_code: value,
          supplier_invoice_number: prevValue.supplier_invoice_number,
          supplier_invoice_value: prevValue.supplier_invoice_value,
        };
      } else if (name === "supplier_invoice_number") {
        return {
          supplier_name: prevValue.supplier_name,
          supplier_code: prevValue.supplier_code,
          supplier_invoice_number: value,
          supplier_invoice_value: prevValue.supplier_invoice_value,
        };
      } else if (name === "supplier_invoice_value") {
        return {
          supplier_name: prevValue.supplier_name,
          supplier_code: prevValue.supplier_code,
          supplier_invoice_number: prevValue.supplier_invoice_number,
          supplier_invoice_value: value,
        };
      }
    });
  }

  const {
    supplier_code,
    supplier_name,
    supplier_invoice_number,
    supplier_invoice_value,
  } = supplierObj;

  //this returns true if any field is empty
  function checkObjectisFilled(obj) {
    let arr = [];
    for (let key in obj) {
      arr.push(obj[key] !== undefined && obj[key] !== null && obj[key] !== "");
    }
    return arr.includes(false);
  }

  //this handels alert message
  function handleAlert(isAllNotFilled) {
    if (isAllNotFilled)
      alert("Please fill all fileds of supplier before adding ");
    else alert(" supplier added successfully!!!!");
  }

  function handleAdd(event) {
    const isAnyEmpty = checkObjectisFilled(details);
    console.log("some filed of supplier is empty :-" + isAnyEmpty);
    handleAlert(isAnyEmpty);
    if (!isAnyEmpty) {
      supplierObj = details;
      console.log("pushing details into supplier obj");
      console.log(supplierObj);
      setDetails({
        supplier_name: "",
        supplier_code: "",
        supplier_invoice_number: "",
        supplier_invoice_value: "",
      });
    }

    event.preventDefault();
  }

  function handleRemove() {
    let btnClear = document.querySelector("button");
    let inputs = document.querySelectorAll("input");
    btnClear.addEventListener("click", () => {
      inputs.forEach((input) => (input.value = ""));
    });
  }

  function handleBlur(event) {
    const supplier_name = details.supplier_name;
    console.log(
      "get supplier function called with argument as:-" + supplier_name
    );
    user.getSupplierDetails(supplier_name).then((resp) => {
      const {
        supplier_name,
        supplier_code,
        supplier_invoice_number,
        supplier_invoice_value,
      } = resp.data.contentsupplier;
      console.log("we got resp data as:-" + resp.data);
      const status = resp.data.status;
      if (status === 1) {
        setDetails({
          supplier_name: supplier_name,
          supplier_code: supplier_code,
          supplier_invoice_number: "",
          supplier_invoice_value: "",
        });
      } else console.log("no supplier with such name in DB");
    });
    event.preventDefault();
  }

  return (
    <div className="supplier-form crd">
      <p className="text-color" style={{ textAlign: "center", paddingTop: "10px" }}>
        Supplier Details
      </p>
      <form style={{ width: "50%" }}>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div className="form-group col-md-3">
            <label for="supplier_name">Supplier Name</label>
            <input
              type="text"
              class="form-control"
              id="supplier_name"
              placeholder="Supplier Name"
              name="supplier_name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={details.supplier_name}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="supplier_code">Supplier Code</label>
            <input
              type="text"
              class="form-control"
              id="supplier_code"
              placeholder="Supplier Code"
              name="supplier_code"
              onChange={handleChange}
              value={details.supplier_code}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="invoice_number">Invoice Number</label>
            <input
              type="text"
              class="form-control"
              id="invoice_number"
              placeholder="Invoice Number"
              name="supplier_invoice_number"
              onChange={handleChange}
              value={details.supplier_invoice_number}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="invoice_value">Invoice Value</label>
            <input
              type="text"
              class="form-control"
              id="invoice_value"
              placeholder="Invoice Value"
              name="supplier_invoice_value"
              onChange={handleChange}
              value={details.supplier_invoice_value}
            />
          </div>
        </div>
      </form>
      <div style={{ paddingLeft: "800px", paddingBottom: "20px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleAdd}
        >
          ADD
        </button>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleRemove}
          style={{ marginLeft: "10px" }}
        >
          {" "}
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default SupplierForm;
export { supplierObj };
