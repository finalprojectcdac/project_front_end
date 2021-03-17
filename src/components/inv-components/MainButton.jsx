import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import {supplierObj} from './SupplierForm';
import {inventoryDetails,prvQuantityDetails} from './InvForm';
import {Alert} from 'react-st-modal';
   
function MainButton()
{   
     //checking object and  array conatin
  function checkAllObj(){
    console.log("inventory array of obj:-");
    console.log(inventoryDetails);
    console.log(" Array item quantity in store is :-");
    console.log(prvQuantityDetails);
  
    //console.log("supplier inv no :-");
    //console.log(supplierObj.supplier_invoice_number);
}
    function handleSave() {
        console.log(prvQuantityDetails);
    const x = user.insertInventoryData(inventoryDetails);
    const y = user.insertSupplierDetails(supplierObj);

    console.log(x);
    console.log(y);
 }
   
 function handleCancel()
    
 { console.log("cancel button clicked");}

    return(
        <div className="main-buttons">
        {/* <form> */}
            <button class="btn btn-success btn-inv"
             type="submit" onClick={handleSave} >SAVE</button>
            <button class="btn btn-success btn-inv" 
            type="submit" onClick={handleCancel}>CANCEL</button>
            {/* button created for testing */}
            <button class="btn btn-success btn-inv" type="submit" 
                onClick={checkAllObj}>check</button>
        {/* </form> */}
        </div>
    );

}
export default MainButton;
