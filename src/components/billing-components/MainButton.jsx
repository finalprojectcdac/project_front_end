import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../service/serviceLayer";
import { arrayOfItemSaleObjects ,arrayOfQuantityUpdate} from "./BillForm";
import { invoice } from "./CustomerForm";

function MainButton() {
  function handleSave(event) {
    //console.log(arrayOfQuantityUpdate);
    const x = user.insertListOfItems(arrayOfItemSaleObjects);
    const y = user.insertInvoice(invoice);
    const z =  user.updateItemQuantity(arrayOfQuantityUpdate);
    console.log(x);
    console.log(y);
    console.log(z);
    //event.preventDefault();
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
    </div>
  );
}
export default MainButton;
