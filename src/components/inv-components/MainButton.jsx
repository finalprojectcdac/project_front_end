import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import {supplierObj} from './SupplierForm';
import {inventoryDetails,prvQuantityDetails} from './InvForm';
import {Alert} from 'react-st-modal';
   
function MainButton()
{   

    var count=0;
    function matchQuantityandValue(){
        for(var i=0;i<inventoryDetails.length;i++)
        {
            for(var j=0;j<prvQuantityDetails.length;j++)
            {
               if(inventoryDetails[i].item_code==prvQuantityDetails[j].item_code){
               inventoryDetails[i].quantity=parseInt(inventoryDetails[i].quantity)+
               parseInt(prvQuantityDetails[j].quantity);
               inventoryDetails[i].total_value=parseInt(inventoryDetails[i].quantity)*parseInt(inventoryDetails[i].unit_price);
               count++}
            }   
          
         
        }
    }
     //checking object and  array conatin
  function checkAllObj(){
      matchQuantityandValue();
    console.log("Inventory array of obj:-");
    console.log(inventoryDetails);
    console.log(" Array item quantity in store is :-");
    console.log(prvQuantityDetails);
    
    console.log(" Total Item matched");
    console.log(count);
    //console.log("supplier inv no :-");
    //console.log(supplierObj.supplier_invoice_number);
}
    function handleSave() {
        matchQuantityandValue();
    const x = user.insertInventoryData(inventoryDetails);
    const y = user.insertSupplierDetails(supplierObj);

    console.log(x);
    console.log(y);
  }

  function handleCancel() {
    console.log("cancel button clicked");
  }

  return (
    <div className="main-buttons">
      <form>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleSave}
        >
          SAVE
        </button>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleCancel}
        >
          CANCEL
        </button>
      </form>
      <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={checkAllObj}>
            check
        </button>
    </div>
  );
}
export default MainButton;
