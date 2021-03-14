import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Inv-Table";
import user from '../../service/serviceLayer';

let inventoryDetails = [];
let item_code=null;
function Inv_form2(){
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
          if (name === "brand") {
              return {
                  item_code: prevValue.item_code,
                  brand: value,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
              supplier_invoice_no:prevValue.supplier_invoice_no,
              unit_price:prevValue.unit_price,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };}
          else if(name === "item_code"){
              return {
                  item_code: value,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
              supplier_invoice_no:prevValue.supplier_invoice_no,
              unit_price:prevValue.unit_price,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };
          
          } else if (name === "item_name") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name: value,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
              supplier_invoice_no:prevValue.supplier_invoice_no,
              unit_price:prevValue.unit_price,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };
          } else if (name === "unit_measurement") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: value,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
              supplier_invoice_no:prevValue.supplier_invoice_no,
              unit_price:prevValue.unit_price,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };
          } else if (name === "stock_entry_date") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date:value,
                  item_category:prevValue.item_category,
              supplier_invoice_no:prevValue.supplier_invoice_no,
              unit_price:prevValue.unit_price,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };
          } else if (name === "item_category") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  tock_entry_date: prevValue.stock_entry_date,
                  item_category:value,
              supplier_invoice_no:prevValue.supplier_invoice_no,
              unit_price:prevValue.unit_price,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };
          }
          else if (name === "supplier_invoice_no") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
              supplier_invoice_no:value,
              unit_price:prevValue.unit_price,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };
          } else if (name === "unit_price") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
                supplier_invoice_no:prevValue.supplier_invoice_no,
              unit_price:value,
              total_value:prevValue.total_value,
              quantity:prevValue.quantity
              };
          } else if (name === "total_value") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
                  supplier_invoice_no:prevValue.supplier_invoice_no,
                  unit_price:prevValue.unit_price,
                  total_value:value,
                  quantity:prevValue.quantity
              };
          }
          else if (name === "quantity") {
              return {
                  item_code: prevValue.item_code,
                  brand: prevValue.brand,
                  item_name:prevValue.item_name,
                  unit_measurement: prevValue.unit_measurement,
                  stock_entry_date: prevValue.stock_entry_date,
                  item_category:prevValue.item_category,
                  supplier_invoice_no:prevValue.supplier_invoice_no,
                  unit_price:prevValue.unit_price,
                  total_value:prevValue.total_value,
                  quantity:value
              };
          }
      });
  }

  function handleBlur(event) {
      console.log(inventoryDetails);
    const x = user.getItemDetails({
        params: {
          item_code:inventoryDetails.item_code
        }
      })
      .then(function (response) {
        console.log(response);
      });
    console.log(x);
    // .then(resp => {

    //      console.log(resp.data);
    //       console.log(resp.data[0]);
    //       event.preventDefault();
    //   });
      
  }

  function handleclick(event) { 
    inventoryDetails.push(details);
      console.log(inventoryDetails);
      setDetails({
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
      event.preventDefault();
     
      return (
        ReactDOM.render(<Table />, document.getElementById('table'))
    );
    
  }
 

 return (<div className="inv-form crd">
     {/* <form>  <fieldset> */}
        <legend className="text-color">Inventory Entry</legend>   
        <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Item Code
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" ItemCode" name="item_code" onChange={handleChange} value={details.item_code} ></input>
          <button onClick={handleBlur}>Fetch</button>
          </div>
          </div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Brand Name
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" Brand Name" name="brand" onChange={handleChange} value={details.brand} ></input>
          </div>
          </div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
            Item Name
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" Item Name" name="item_name" onChange={handleChange} value={details.item_name} ></input>
          </div>
          </div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
         Unit Measure
          </label>
          <div class="col-md-4">
            <input type="text" placeholder=" Unit Measure" name="unit_measurement" onChange={handleChange} value={details.unit_measurement} ></input>
          </div>
          </div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Stock Entry Date
          </label>
          <div class="col-md-4">
          <input type="date" placeholder=" Date" name="stock_entry_date" onChange={handleChange} value={details.stock_entry_date} ></input>
          </div>
          </div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Item Category
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" Item Category" name="item_category" onChange={handleChange} value={details.item_category} ></input>
          </div>
          </div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Supplier Invoice No.
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" Supplier Invoice NO." name="supplier_invoice_no" onChange={handleChange} value={details.supplier_invoice_no} ></input>
          </div></div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Unit Price
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" Unit_price" name="unit_price" onChange={handleChange} value={details.unit_price} ></input>
          </div></div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Total Value
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" Total Value" name="total_value"  value={details.total_value=details.unit_price*details.quantity} ></input>
          </div></div>
          <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
          Quantity
          </label>
          <div class="col-md-4">
          <input type="text" placeholder=" Quantity" name="quantity" onChange={handleChange} value={details.quantity} ></input>
          </div></div>
          <button class="btn btn-success btn-inv" type="submit" onClick={handleclick}>ADD</button>
          <button class="btn btn-success btn-inv" type="submit">UPDATE</button>
          <button class="btn btn-success btn-inv" type="submit">REMOVE</button>
          <button class="btn btn-success btn-inv" type="submit">VIEW</button>
  {/* </fieldset>
  </form> */}
 
 </div>);
}

export default Inv_form2;
export {inventoryDetails};
export {item_code};