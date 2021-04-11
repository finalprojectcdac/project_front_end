import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";
import { supplierObj } from "./SupplierForm";
import {
  inventoryDetails,
  prvQuantityDetails,
  retailDataArray,
} from "./InvForm";
import Alert from "react-s-alert";

function MainButton(props) {
  var count = 0;
  function matchQuantityandValue() {
    for (var i = 0; i < inventoryDetails.length; i++) {
      for (var j = 0; j < prvQuantityDetails.length; j++) {
        if (inventoryDetails[i].item_code === prvQuantityDetails[j].item_code) {
          inventoryDetails[i].quantity =
            parseInt(inventoryDetails[i].quantity) +
            parseInt(prvQuantityDetails[j].quantity);
          inventoryDetails[i].total_value =
            parseInt(inventoryDetails[i].quantity) *
            parseInt(inventoryDetails[i].unit_price);
          count++;
        }
      }
    }
  }
  //checking object and  array conatin
  // function checkAllObj() {
  //   matchQuantityandValue();
  //   console.log("Inventory array of obj:-");
  //   console.log(inventoryDetails);
  //   console.log(" Array item quantity in store is :-");
  //   console.log(prvQuantityDetails);
  //   console.log(" Total Item matched");
  //   console.log(count);
  //   console.log("Retail price list");
  //   console.log(retailDataArray);
  //   console.log("////////////");
  //   console.log(supplierObj.supplier_invoice_value);
  //   console.log(parseInt(supplierObj.supplier_invoice_value));
  //   console.log(parseFloat(props.totalAmount));
  // }
  function handleSave(event) {
    if (supplierObj.supplier_invoice_value === undefined) {
      Alert.error("Error!! Supplier Details are empty!");
      event.preventDefault();
    } else if (parseFloat(props.totalAmount) === 0) {
      Alert.error("Error!! Inventory Table is empty!");
      event.preventDefault();
    } else if (
      parseFloat(props.totalAmount) === parseFloat(supplierObj.supplier_invoice_value)
    ) {
      matchQuantityandValue();
      //inser retail price data
      const x = user.insertInventoryData(inventoryDetails);
      const y = user.insertSupplierDetails(supplierObj);
      const z = user.insertListofRetailPriceData(retailDataArray);
      // console.log(x);
      // console.log(y);
      // console.log(z);
      Alert.success("Success!! Details saved successfully!");
    } else {
      Alert.error("Error!! Invoice value and Total do not match!");
      event.preventDefault();
    }
  }
  function handleCancel() {
    // console.log("cancel button clicked");
  }

  return (
    <div className="main-buttons">
      <form>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleCancel}
        >
          CANCEL
        </button>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleSave}
        >
          SAVE
        </button>
      </form>

      {/* <button
        class="btn btn-success btn-inv"
        type="submit"
        onClick={checkAllObj}
      >
        check
      </button> */}
    </div>
  );
}
export default MainButton;
