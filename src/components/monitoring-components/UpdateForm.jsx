import React, { useState } from "react";
import user from "../../service/serviceLayer";
import { Link } from "react-router-dom";

function UpdateForm() {
  const [itemDetails, setItemDetails] = useState({
    item_code: "",
    brand: "",
    item_name: "",
    item_category: "",
    unit_measurement: "",
    quantity: "",
    unit_price: "",
    selling_price: "",
  });
  const [hideUpdateForm, setHideUpdateForm] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "item_code" && value === "") {
      setItemDetails({
        item_code: "",
        brand: "",
        item_name: "",
        item_category: "",
        unit_measurement: "",
        quantity: "",
        unit_price: "",
        selling_price: "",
      });
    } else {
      setItemDetails((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    }
  }

  function clearForm() {
    setItemDetails({
      item_code: "",
      brand: "",
      item_name: "",
      item_category: "",
      unit_measurement: "",
      quantity: "",
      unit_price: "",
      selling_price: "",
    });
  }

  function handleBlur(event) {
    const item_code = event.target.value;

    if (item_code !== "") {
      console.log("handle blur called with:-" + item_code);
      user.getItemDetails(item_code).then((resp1) => {
        user.getItemDetailsForSale(item_code).then((resp2) => {
          const status1 = resp1.data.status;
          const status2 = resp2.data.status;
          const {
            item_code,
            brand,
            item_name,
            item_category,
            unit_measurement,
            quantity,
            unit_price,
          } = resp1.data.content;
          const { selling_price } = resp2.data.bo;
          console.log(item_name);
          console.log(selling_price);
          console.log(status1);
          console.log(status2);
          if (status1 === 1 && status2 === 1 && selling_price >= 0) {
            setItemDetails({
              item_code: item_code,
              brand: brand,
              item_name: item_name,
              item_category: item_category,
              unit_measurement: unit_measurement,
              quantity: quantity,
              unit_price: unit_price,
              selling_price: selling_price,
            });
          } else if (status1 === 1 && status2 === 1) {
            setItemDetails({
              item_code: item_code,
              brand: brand,
              item_name: item_name,
              item_category: item_category,
              unit_measurement: unit_measurement,
              quantity: quantity,
              unit_price: unit_price,
              selling_price: "NOT SET",
            });
          } else {
            setItemDetails({
              item_code: "",
              brand: "",
              item_name: "",
              item_category: "",
              unit_measurement: "",
              quantity: "",
              unit_price: "",
              selling_price: "",
            });
          }
        });
      });
    }
  }

  function handleUpdate() {
    if (itemDetails.item_code !== "") {
      user.updateInventoryAndSellingPriceData(itemDetails).then((resp) => {
        const { status, reason } = resp.data;
        console.log(status);
        console.log(reason);
      });
      setItemDetails({
        item_code: "",
        brand: "",
        item_name: "",
        item_category: "",
        unit_measurement: "",
        quantity: "",
        unit_price: "",
        selling_price: "",
      });
    } else {
      console.log("Empty Object");
    }
  }

  return (
    <div className="update-form crd">
      <div style={{ height: "50px" }}>
        <p
          className="text-color"
          style={{ textAlign: "center", paddingTop: "0px", paddingTop: "10px" }}
        >
          Update Inventory
        </p>
        <Link to="/monitoring/checkinventory">
          <button
            className="btn btn-inv btn-success btn-sm"
            style={{ position: "relative", left: "1000px", top: "-61px" }}
          >
            <b>CLOSE</b>
          </button>
        </Link>
      </div>
      <form style={{ width: "50%" }}>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div className="form-group col-md-3">
            <label for="item_code">Item Code</label>
            <input
              type="text"
              class="form-control"
              id="item_code"
              placeholder="Item Code"
              name="item_code"
              onBlur={handleBlur}
              onChange={handleChange}
              value={itemDetails.item_code}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="brand">Brand</label>
            <input
              type="text"
              class="form-control"
              id="brand"
              placeholder="Brand"
              name="brand"
              onChange={handleChange}
              value={itemDetails.brand}
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
              value={itemDetails.item_name}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="item_category">Item Category</label>
            <input
              type="text"
              class="form-control"
              id="item_category"
              placeholder="Item Category"
              name="item_category"
              onChange={handleChange}
              value={itemDetails.item_category}
            />
          </div>
        </div>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div class="form-group col-md-3">
            <label for="uom">Unit of measurement</label>
            <input
              type="text"
              class="form-control"
              id="uom"
              placeholder="Unit of measurement"
              name="unit_measurement"
              onChange={handleChange}
              value={itemDetails.unit_measurement}
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
              // onBlur={setPrevQuantity}
              onChange={handleChange}
              value={itemDetails.quantity}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="unit_prce">Unit Price</label>
            <input
              type="text"
              class="form-control"
              id="unit_prce"
              placeholder="Unit Price"
              name="unit_price"
              onChange={handleChange}
              value={itemDetails.unit_price}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="selling_price">Selling Price</label>
            <input
              type="text"
              class="form-control"
              id="selling_price"
              placeholder="Selling Price"
              name="selling_price"
              onChange={handleChange}
              value={itemDetails.selling_price}
              onClick={(event) => {
                if (event.target.value === "NOT SET") {
                  return (event.target.value = "");
                }
              }}
            />
          </div>
        </div>
      </form>
      <div style={{ paddingLeft: "680px", paddingBottom: "20px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleUpdate}
        >
          UPDATE
        </button>
        {/* button created for testing */}
        {/* <button
          class="btn btn-success btn-inv"
          type="submit"
          //   onClick={checkAllObj}
        >
          check
        </button> */}
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={clearForm}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default UpdateForm;
