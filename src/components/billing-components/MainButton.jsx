import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";
import {
  arrayOfItemSaleObjects,
  arrayOfQuantityUpdate,
  totalAmount,
} from "./BillForm";
import { invoice } from "./CustomerForm";
import Alert from "react-s-alert";

function checkAll() {
  console.log("invoices details:");
  console.log(invoice.mobile_no != "");
  console.log("Total Amount:");
  console.log(totalAmount);
  console.log(totalAmount <= invoice.invoice_value);
}
function MainButton() {
  function handleSave(event) {
    if (invoice.mobile_no != "" && invoice.customer_name != "") {
      if (totalAmount == 0) {
        Alert.error("Error! No items in the table!");
        event.preventDefault();
      } else if (invoice.invoice_value == 0) {
        Alert.error("Please enter the amount received from the customer!");
        event.preventDefault();
      } else if (totalAmount <= invoice.invoice_value) {
        //console.log(arrayOfQuantityUpdate);
        const x = user.insertListOfItems(arrayOfItemSaleObjects);
        const y = user.insertInvoice(invoice);
        const z = user.updateItemQuantity(arrayOfQuantityUpdate);
        console.log(x);
        console.log(y);
        console.log(z);
        Alert.success(
          "Bill no. " + invoice.invoice_no + " generated successfully!"
        );
      }
      //event.preventDefault();
      else {
        Alert.error("Amount received is less than the total bill value!");
        event.preventDefault();
      }
    } else {
      Alert.error("Please enter the mobile no. & name of the customer!");
      event.preventDefault();
    }
  }
  return (
    <div className="main-buttons">
      <form>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleSave}
        >
          PRINT
        </button>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          // onClick={handleCancel}
        >
          CANCEL
        </button>
      </form>
      {/* <button
        class="btn btn-success btn-inv"
        type="submit"
        onClick={checkAll}
      >
        check
      </button> */}
    </div>
  );
}
export default MainButton;
