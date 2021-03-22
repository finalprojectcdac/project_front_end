import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";
import {
  arrayOfItemSaleObjects,
  arrayOfQuantityUpdate,
  totalAmount,
} from "./BillForm";
import { invoice } from "./CustomerForm";
function checkAll()
{
  console.log("invoices details:")
  console.log(invoice.mobile_no!="")
  console.log("Total Amount:")
  console.log(totalAmount)
  console.log(totalAmount<=invoice.invoice_value);
}
function MainButton() {

  function handleSave(event) {
    if(invoice.mobile_no!=""&&invoice.customer_name!=""){
        if(totalAmount==0){
      alert("please Add the items into your list")
      event.preventDefault()
    }
    else if(invoice.invoice_value==0)
    {
      alert("please Enter the amaount recived from cutomer")
      event.preventDefault()
    }
    else if(totalAmount<=invoice.invoice_value)
    {//console.log(arrayOfQuantityUpdate);
    const x = user.insertListOfItems(arrayOfItemSaleObjects);
    const y = user.insertInvoice(invoice);
    const z = user.updateItemQuantity(arrayOfQuantityUpdate);
    console.log(x);
    console.log(y);
    console.log(z);
    alert("Bill no "+invoice.invoice_no+": your bill generated successfully")}
    //event.preventDefault();
  else{
    alert(" please recive complete amount")
    event.preventDefault();
  }
}else {alert("please enter cutomer mobile no and cutomer name");
event.preventDefault();}
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
      <button
        class="btn btn-success btn-inv"
        type="submit"
        onClick={checkAll}
      >
        check
      </button>
    </div>
  );
}
export default MainButton;
