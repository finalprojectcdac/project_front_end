import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";
import { arrayOfItemSaleObjects, arrayOfQuantityUpdate } from "./BillForm";
import { invoice } from "./CustomerForm";
import Alert from "react-s-alert";
import { useHistory } from "react-router-dom";

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
    if (props.totalAmount !== 0) {
      if (invoice.mobile_no === "") {
        Alert.error("Please fill customer details and press Add button!");
        event.preventDefault();
      } 
      // else if (invoice.customer_name === "") {
      //   Alert.error("Please fill customer details!");
      //   event.preventDefault();
      // } else if (invoice.invoice_value === "") {
      //   Alert.error("Please enter the amount received from the customer!");
      //   event.preventDefault();
      // } else if (parseFloat(invoice.invoice_value) !== props.totalAmount) {
      //   Alert.error("Please press the add button!");
      //   event.preventDefault();
      // } 
      else {
        user.insertListOfItems(arrayOfItemSaleObjects);
        user.insertInvoice(invoice);
        user.updateItemQuantity(arrayOfQuantityUpdate);
        Alert.success(
          "Bill no. " + invoice.invoice_no + " generated successfully!"
        );
        history.push("/invoice");
        event.preventDefault();
      }
    } else {
      Alert.error("Error! No items in the table!");
      event.preventDefault();
    }
    // if (invoice.mobile_no !== "" && invoice.customer_name !== "") {
    //   if (props.totalAmount === 0) {
    //   } else if (invoice.invoice_value === 0) {
    //     Alert.error("Please enter the amount received from the customer!");
    //     event.preventDefault();
    //   } else {
    //     user.insertListOfItems(arrayOfItemSaleObjects);
    //     user.insertInvoice(invoice);
    //     user.updateItemQuantity(arrayOfQuantityUpdate);
    //     Alert.success(
    //       "Bill no. " + invoice.invoice_no + " generated successfully!"
    //     );
    //     history.push("/invoice");
    //     event.preventDefault();
    //   }
    // } else {
    //   Alert.error("Please enter the mobile no. & name of the customer!");
    //   event.preventDefault();
    // }
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
