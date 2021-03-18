import React, { useState } from "react";
import user from "../../service/serviceLayer";

let sumOfQuantity = 0;
let totalAmount = 0;
const itemsSoldList = [];

function BillForm(props) {
  const billNo = props.billNo; //this will be set on service function

  const [details, setDetails] = useState({
    item_code: "",
    brand: "",
    item_name: "",
    quantity: "",
    unit_measurement: "",
    selling_price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "item_code" && value === "") {
      setDetails({
        item_code: "",
        brand: "",
        item_name: "",
        quantity: "",
        unit_measurement: "",
        selling_price: "",
      });
    } else {
      setDetails((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    }
  }

  function handleBlur(event) {
    const item_code = event.target.value;
    if (item_code !== 0) {
      console.log("blur called with item_code: " + item_code);
      user.getItemDetailsForSale(item_code).then((resp) => {
        const status = resp.data.status;
        if (status === 1) {
          const {
            item_code,
            brand,
            item_name,
            quantity,
            unit_measurement,
            selling_price,
          } = resp.data.bo;
          setDetails({
            item_code: item_code,
            item_name: brand + " " + item_name,
            unit_measurement: unit_measurement,
            quantity: "",
            selling_price: selling_price,
          });
        } else if (status === 2) {
          setDetails({
            item_code: item_code,
            item_name: "",
            unit_measurement: "",
            quantity: "",
            total_value: "",
          });
        } else {
          setDetails({
            item_code: item_code,
            item_name: "",
            unit_measurement: "",
            quantity: "",
            total_value: "",
          });
        }
        console.log(status);
      });
      console.log(details);
    }
  }
  //check function for debuging purpose
  function checkAllObj() {
    console.log("checking of variable will be done here");
    console.log("Bill No.");
    console.log(billNo);
    console.log("Details:-");
    console.log(details);
  }

  function handleAdd(event) {
    itemsSoldList.push(details);
    console.log(itemsSoldList);
    props.onAdd(details);
    setDetails({
      item_code: "",
      brand: "",
      item_name: "",
      quantity: "",
      unit_measurement: "",
      selling_price: "",
    });
    for (let i = itemsSoldList.length - 1; i < itemsSoldList.length; i++) {
      sumOfQuantity += parseInt(itemsSoldList[i].quantity);
      totalAmount += parseFloat(
        itemsSoldList[i].quantity * itemsSoldList[i].selling_price
      );
      break;
    }
  }

  return (
    <div className="bill-form crd">
      <p
        className="text-color"
        style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "0px" }}
      >
        Items
      </p>
      <form style={{ width: "50%" }}>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div className="form-group col-md-3">
            <label for="bill_no">Bill No.</label>
            <input
              type="text"
              class="form-control"
              id="bill_no"
              placeholder="Bill No."
              name="bill_no"
              onChange={handleChange}
              value={billNo}
              disabled
            />
          </div>
          <div class="form-group col-md-3">
            <label for="item_code">Item Code</label>
            <input
              type="text"
              class="form-control"
              id="item_code"
              placeholder="Item Code"
              name="item_code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={details.item_code}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="item_name">Item Name</label>
            <input
              type="text"
              class="form-control"
              id="item_name"
              placeholder="Item Name"
              name="item_name"
              onChange={handleChange}
              value={details.item_name}
              disabled
            />
          </div>

          <div className="form-group col-md-3">
            <label for="quantity">Quantity</label>
            <input
              type="text"
              class="form-control"
              id="quantity"
              placeholder="Quantity"
              name="quantity"
              onChange={handleChange}
              value={details.quantity}
              // onBlur={setPrevQuantity}
            />
          </div>
        </div>
      </form>
      <div style={{ paddingLeft: "680px", paddingBottom: "20px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleAdd}
        >
          ADD
        </button>
        {/* button created for testing */}
        <button class="btn btn-success btn-inv" type="submit">
          check
        </button>
        <button class="btn btn-inv btn-danger" type="submit">
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default BillForm;
export { itemsSoldList, sumOfQuantity, totalAmount };
