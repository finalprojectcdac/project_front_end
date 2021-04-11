import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";
import Alert from "react-s-alert";

let supplierObj = {};
let totalInvoiceValue = 0;
function SupplierForm() {
  const [details, setDetails] = useState({
    supplier_name: "",
    supplier_code: "",
    supplier_invoice_number: "",
    supplier_invoice_value: "",
    purchase_date: "",
  });

  const [fieldDisabled, setFieldDisabled] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "supplier_name" && value === "") {
      setDetails({
        supplier_name: "",
        supplier_code: "",
        supplier_invoice_number: "",
        supplier_invoice_value: "",
        purchase_date: "",
      });
    } else {
      setDetails((prevValue) => {
        return {
          ...prevValue,
          [name]: value,
          purchase_date:
            new Date().getFullYear().toString() +
            "-" +
            (new Date().getMonth() + 1).toString() +
            "-" +
            new Date().getDate().toString(),
        };
      });
    }
  }

  const {
    supplier_code,
    supplier_name,
    supplier_invoice_number,
    supplier_invoice_value,
    purchase_date,
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
      Alert.error("Please fill all the fields of Supplier Details!");
    else Alert.success("Supplier added successfully!");
  }

  function handleAdd(event) {
    const isAnyEmpty = checkObjectisFilled(details);
    // console.log("some filed of supplier is empty :-" + isAnyEmpty);
    handleAlert(isAnyEmpty);
    if (!isAnyEmpty) {
      supplierObj = details;
      // console.log("pushing details into supplier obj");
      // console.log(supplierObj);
      setDetails({
        supplier_name: details.supplier_name,
        supplier_code: details.supplier_code,
        supplier_invoice_number: details.supplier_invoice_number,
        supplier_invoice_value: details.supplier_invoice_value,
        purchase_date: details.purchase_date,
      });
      setFieldDisabled(true);
    }

    event.preventDefault();
  }

  function handleRemove() {
    setFieldDisabled(false);
    setDetails({
      supplier_name: "",
      supplier_code: "",
      supplier_invoice_number: "",
      supplier_invoice_value: "",
      purchase_date: "",
    });
  }

  function handleBlur(event) {
    const supplier_name = details.supplier_name;
    // console.log(
    //   "get supplier function called with argument as:-" + supplier_name
    // );
    user.getSupplierDetails(supplier_name).then((resp) => {
      const {
        supplier_name,
        supplier_code,
        supplier_invoice_number,
        supplier_invoice_value,
      } = resp.data.contentsupplier;
      // console.log(resp.data);
      const status = resp.data.status;
      if (status === 1) {
        setDetails({
          supplier_name: supplier_name,
          supplier_code: supplier_code,
          supplier_invoice_number: "",
          supplier_invoice_value: "",
          purchase_date: "",
        });
      } else {
        // console.log("no supplier with such name in DB");
      }
    });
    event.preventDefault();
  }
  function setInvoicevalue() {
    totalInvoiceValue = details.supplier_invoice_value;
  }
  return (
    <div className="supplier-form crd">
      <p
        className="text-color"
        style={{ textAlign: "center", paddingTop: "10px" }}
      >
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
              disabled={fieldDisabled}
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
              disabled={fieldDisabled}
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
              disabled={fieldDisabled}
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
              onblur={setInvoicevalue}
              value={details.supplier_invoice_value}
              disabled={fieldDisabled}
            />
          </div>
        </div>
      </form>
      <div style={{ paddingLeft: "800px", paddingBottom: "20px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleAdd}
          disabled={fieldDisabled}
        >
          ADD
        </button>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleRemove}
          style={{ marginLeft: "10px" }}
        >
          EDIT
        </button>
      </div>
    </div>
  );
}

export default SupplierForm;
export { supplierObj, totalInvoiceValue };
