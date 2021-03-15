import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import {supplierObj} from './SupplierForm';
import {inventoryDetails} from './inv-form2';
   
function MainButton()
{
    function handleSave() {
    const x = user.insertInventoryData(inventoryDetails);
    const y = user.insertSupplierDetails(supplierObj);

    console.log(x);
    console.log(y);
 }
    
 function handleCancel()
    
 { console.log("cancel button clicked");}

    return(
        <div className="main-buttons">
            <button class="btn btn-success btn-inv"
             type="submit" onClick={handleSave} >SAVE</button>
            <button class="btn btn-success btn-inv" 
            type="submit" onClick={handleCancel}>CANCEL</button>
            <span>Hello</span>
        </div>
    );

}
export default MainButton;
