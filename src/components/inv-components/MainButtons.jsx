import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function handleSave()
 { console.log("save button clicked");}
 function handleCancel()
 { console.log("cancel button clicked");}
   
function MainButton()
{
    return(
        <div className=" crd-button ">
            <button class="btn btn-success btn-inv"
             type="submit" onClick={handleSave} >SAVE</button>
            <button class="btn btn-success btn-inv" 
            type="submit" onClick={handleCancel}>CANCLE</button>
        </div>
    );

}
export default MainButton;