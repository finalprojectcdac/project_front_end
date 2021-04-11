import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";
import {
  arrayOfItemSaleObjects,
  arrayOfQuantityUpdate,
} from "./BillForm";
import { invoice } from "./CustomerForm";
import Alert from "react-s-alert";
import {useHistory} from "react-router-dom";

// function checkAll() {
//   console.log("invoices details:");
//   console.log(invoice.mobile_no !== "");
//   console.log("Total Amount:");
//   // console.log(props.totalAmount);
//   // console.log(props.totalAmount <= invoice.invoice_value);
// }
function MainButton(props) {
  const history = useHistory();
  function handleSave(event) {
    if (invoice.mobile_no !== "" && invoice.customer_name !== "") {
      if (props.totalAmount === 0) {
        Alert.error("Error! No items in the table!");
        event.preventDefault();
      } else if (invoice.invoice_value === 0) {
        Alert.error("Please enter the amount received from the customer!");
        event.preventDefault();
      } else if (props.totalAmount === invoice.invoice_value) {
        user.insertListOfItems(arrayOfItemSaleObjects);
        user.insertInvoice(invoice);
        user.updateItemQuantity(arrayOfQuantityUpdate);
        Alert.success(
          "Bill no. " + invoice.invoice_no + " generated successfully!"
        );
        history.push("/invoice");
        event.preventDefault();
      }
      else {
        Alert.error("Amount received does not match the total bill value!");
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
