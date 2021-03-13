import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
   
function MainButton(props)
{
    function handleSave()

 {
    const x = user.insertInventoryData(props.inventoryDetails);
     const y = user.insertSupplierDetails(props.supplierobj);

     console.log(x);
     console.log(y);
 }
    
 function handleCancel()
    
 { console.log("cancel button clicked");}

    return(
        <div className="crd-button ">
            <button class="btn btn-success btn-inv"
             type="submit" onClick={handleSave} >SAVE</button>
            <button class="btn btn-success btn-inv" 
            type="submit" onClick={handleCancel}>CANCEL</button>
            <span><h3>Hello</h3></span>
        </div>
    );

}
export default MainButton;
