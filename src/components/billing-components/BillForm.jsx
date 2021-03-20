import React, { useState } from "react";
import user from "../../service/serviceLayer";

let sumOfQuantity = 0;
let totalAmount = 0;
const itemsSoldList = [];
var arrayOfItemSaleObjects = [];

function BillForm(props) {
  const [details, setDetails] = useState({
    invoice_no: props.billNo,
    item_code: "",
    brand: "",
    item_name: "",
    quantity: "",
    unit_measurement: "",
    selling_price: "",
  });

  const [updateObject, setUpdateObject] = useState({
    item_code: "",
    quantity: "",
  });

  const [itemSaleObject, setItemSaleObject] = useState({
    invoice_no: "",
    item_code: "",
    quantity_sold: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "item_code" && value === "") {
      setDetails({
        invoice_no: props.billNo,
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

  function getItemDetailsForSale(item_code) {
    user.getItemDetailsForSale(item_code).then((resp) => {
      const status = resp.data.status;
      console.log(status);
      if (status === 1) {
        const {
          item_code,
          brand,
          item_name,
          quantity,
          unit_measurement,
          selling_price,
        } = resp.data.bo;
        console.log();
        setUpdateObject({
          item_code: item_code,
          quantity: quantity,
        });
        setDetails({
          invoice_no: props.billNo,
          item_code: item_code,
          item_name: brand + " " + item_name,
          unit_measurement: unit_measurement,
          quantity: "",
          selling_price: selling_price,
        });
      } else if (status === 2) {
        setDetails({
          invoice_no: props.billNo,
          item_code: item_code,
          item_name: "",
          unit_measurement: "",
          quantity: "",
          total_value: "",
        });
      } else {
        setDetails({
          invoice_no: props.billNo,
          item_code: item_code,
          item_name: "",
          unit_measurement: "",
          quantity: "",
          total_value: "",
        });
      }
      console.log(status);
    });
  }

  function handleBlur(event) {
    const item_code = event.target.value;
    if (item_code !== 0) {
      console.log("blur called with item_code: " + item_code);
      getItemDetailsForSale(item_code);
    }
  }
  //check function for debuging purpose
  function checkAllObj() {
    console.log("checking of variable will be done here");
    console.log("Bill No.");
    console.log(props.billNo);
    console.log("Details:-");
    console.log(details);
    console.log("Items sold list:-");
    console.log(itemsSoldList);
    console.log(
      "Sum of Quantity: " + sumOfQuantity + " Total Amount: " + totalAmount
    );
    console.log("Array of Items sold: ")
     console.log(arrayOfItemSaleObjects);
  }

  function handleAdd(event) {
    user.updateItemQuantity(
      details.item_code,
      updateObject.quantity - details.quantity
    );
    
    itemsSoldList.push(details);

    setItemSaleObject({
      invoice_no: props.billNo,
      item_code: details.item_code,
      quantity_sold: details.quantity,
    });

    arrayOfItemSaleObjects.push(itemSaleObject);

    props.onAdd(details);
    setDetails({
      invoice_no: props.billNo,
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
        style={{
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "0px",
        }}
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
              value={props.billNo}
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
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={checkAllObj}
        >
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
export { arrayOfItemSaleObjects, itemsSoldList, sumOfQuantity, totalAmount };
