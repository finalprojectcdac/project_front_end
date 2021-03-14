import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import {supplierobj} from './SupplierForm';
   
function MainButton(props)
{
    function handleSave()

 {
     console.log(supplierobj);
    const x = user.insertInventoryData(props.inventoryDetails);
    const y = user.insertSupplierDetails(supplierobj);
    
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
