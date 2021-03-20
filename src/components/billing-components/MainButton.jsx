import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import arrayOfItemSaleObjects from './BillForm';
   
function MainButton() {   

  function handleSave() {
    user.insertListOfItems(arrayOfItemSaleObjects);
    console.log("called");
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
