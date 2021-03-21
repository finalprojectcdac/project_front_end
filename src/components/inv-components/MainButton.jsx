import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import {supplierObj} from './SupplierForm';
import {inventoryDetails,prvQuantityDetails,retailDataArray} from './InvForm';
import {Alert} from 'react-st-modal';



// async () => {
//     await Alert('Successfully saved to database.', 'Review');
// }
   
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
    console.log("Retail price list");
    console.log(retailDataArray);
}
    function handleSave() {
    matchQuantityandValue();
    //inser retail price data
    
    const x = user.insertInventoryData(inventoryDetails);
    const y = user.insertSupplierDetails(supplierObj);
    const z=  user.insertListofRetailPriceData(retailDataArray);
    console.log(x);
    console.log(y);
    console.log(z);
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
