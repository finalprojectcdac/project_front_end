import React ,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import {supplierObj} from"./SupplierForm";

const inventoryDetails = [];
let sumOfQuantity=0;
let totalAmount=0;
function InvForm(props) {

  const [details, setDetails] = useState({
      item_code:"",
      brand:"",
      item_name:"",
      unit_measurement: "",
      stock_entry_date:"",
      item_category:"",
      supplier_invoice_no:"",
      unit_price:"",
      total_value:"",
      quantity:""
  });

  function handleChange(event) {
            const { name, value } = event.target;
            setDetails(prevValue => {
              return {...prevValue, [name]:value, stock_entry_date:new Date().toLocaleDateString(),
                supplier_invoice_no:supplierObj.supplier_invoice_number};});}


  function handleAlert(isAllNotFilled){
    if(details.supplier_invoice_no===undefined)
    {alert("Please fill all the Values of supplier form");}
    else if(isAllNotFilled )
    {alert("Please fill all the Values of inventory form");}
   else
     {props.onAdd(details);}}

  //this returns true if any field is empty
        function checkObjectisFilled(obj){
            let arr = [];
            for (let key in obj) {
             arr.push(obj[key] !== undefined && obj[key] !== null && obj[key] !== "");}
                   return arr.includes(false);}
  //checking object and  array conatin
  function checkAllObj(){
    console.log("Inv-form recived obj from supplier-form");
    console.log({supplierObj});
    console.log("inventory array of obj:-");
    console.log(inventoryDetails);
    console.log("our details array :-");
    console.log(details);
    //console.log("supplier inv no :-");
    //console.log(supplierObj.supplier_invoice_number);
}
   

  function handleBlur(event) {
      const item_code = event.target.value;
      if(item_code !== 0) {
          console.log("handle blur called with:-"+item_code);
          user.getItemDetails(item_code).then(resp => {
            const { item_code, brand, item_name, unit_measurement,
                item_category,unit_price,supplier_invoice_no,stock_entry_date
            } = resp.data.content;
        const status = resp.data.status;
        console.log(status);
        if(status === 1) {
            setDetails({
                item_code:item_code,
                brand:brand,
                item_name:item_name,
                unit_measurement:unit_measurement,
                item_category:item_category,
                unit_price:unit_price,
                total_value:"",
                quantity: "",
                supplier_invoice_no:"",
                stock_entry_date:""

            })
        }
        console.log("our item obj is:-");
        console.log(details);
    })
    }      
  }
 
        
  function handleAlert(isAllNotFilled)
  {
   if(isAllNotFilled)
  alert("Please fill all the Values of inventory form");
  else{
  props.onAdd(details);
  for(let i=inventoryDetails.length-1; i<inventoryDetails.length; i++)
  {
      sumOfQuantity += parseInt(inventoryDetails[i].quantity);
      totalAmount += parseFloat(inventoryDetails[i].total_value);
      break;
  }
  console.log(sumOfQuantity);
  console.log(totalAmount);
  }
   }
    //this returns true if any field is empty
   function checkObjectisFilled(obj){
       console.log(obj);
    let arr = [];
    for (let key in obj) {
      arr.push(obj[key] !== undefined && obj[key] !== null && obj[key] !== "");
    }
    return arr.includes(false);
  }
  
  function handleAdd(event) {
        details.supplier_invoice_no=supplierObj.supplier_invoice_number;
        const isAnyEmpty=checkObjectisFilled(details);
        console.log(details);
        console.log("some filed of inventory is empty :-"+isAnyEmpty);
        handleAlert(isAnyEmpty)
      if (!isAnyEmpty) {
        inventoryDetails.push(details);
          setDetails({
              item_code: "",
              brand: "",
              item_name: "",
              unit_measurement: "",
              stock_entry_date: "",
              item_category: "",
              supplier_invoice_no: "",
              unit_price: "",
              total_value: "",
              quantity: ""
          });
      }
        

      event.preventDefault();
  }
 

 return (
    <div className="inv-form crd">
        <p className="text-color" style={{textAlign:"center", paddingTop:"0px", paddingBottom:"0px"}}>Inventory Entry</p>
            <form style={{width:"50%"}}>
                <div className="form-row" style={{width:"200%", paddingLeft:"30px"}}>
                    <div className="form-group col-md-3">
                        <label for="item_code">Item Code</label>
                        <input type="text" class="form-control" id="item_code" 
                        placeholder="Item Code" name="item_code" 
                        onBlur={handleBlur} onChange={handleChange} value={details.item_code} />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="brand">Brand</label>
                        <input type="text" class="form-control" 
                        id="brand" placeholder="Brand" name="brand" 
                        onChange={handleChange} value={details.brand} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="item_name">Item Name</label>
                        <input type="text" class="form-control" id="item_name" 
                        placeholder="Item Name" name="item_name" 
                        onChange={handleChange} value={details.item_name} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="item_category">Item Category</label>
                        <input type="text" class="form-control" id="item_category" 
                               placeholder="Item Category" name="item_category" 
                              onChange={handleChange} value={details.item_category} />
                    </div>
                </div>
                <div className="form-row" style={{width:"200%", paddingLeft:"30px"}}>
                    <div class="form-group col-md-3">
                        <label for="uom">Unit of measurement</label>
                        <input type="text" class="form-control" id="uom" 
                                placeholder="Unit of measurement" name="unit_measurement" 
                                onChange={handleChange} value={details.unit_measurement} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="quantity">Quantity</label>
                        <input type="text" class="form-control" id="quantity" 
                               placeholder="Quantity" name="quantity" 
                               onChange={handleChange} value={details.quantity} />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="unit_prce">Unit Price</label>
                        <input type="text" class="form-control" id="unit_prce" 
                               placeholder="Unit Price" name="unit_price" 
                               onChange={handleChange} value={details.unit_price} />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="total_value">Total Value</label>
                        <input type="text" class="form-control" id="total_value" placeholder="Total Value" name="total_value"  value={details.total_value=(details.unit_price*details.quantity).toFixed(2)} />
                    </div>
                </div>
            </form>
            <div style={{paddingLeft:"680px", paddingBottom:"20px"}}>
                <button class="btn btn-success btn-inv" type="submit" 
                onClick={handleAdd}>ADD</button>
                <button class="btn btn-success btn-inv" type="submit" 
                onClick={checkAllObj}>check</button>
                <button class="btn btn-success btn-inv" type="submit">UPDATE</button>
                <button class="btn btn-inv btn-danger" type="submit">REMOVE</button>
                <button class="btn btn-success btn-inv" type="submit">VIEW</button>
            </div>
        </div>
    );
}

export default InvForm;
export {inventoryDetails, sumOfQuantity, totalAmount};