import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';
import Table from './Inv-Table';
import schema from '../poc-components/schema.json';
import Tabletest from '../poc-components/tabletest';

let inventoryDetails = [];
function Inv_form2(){
const [data, setData] = useState(null);

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
          return {...prevValue, [name]:value};
      });
  }

  function handleBlur(event) {
      const item_code = event.target.value;
      if(item_code !== 0) {
      console.log(item_code);
        user.getItemDetails(item_code).then(resp => {
            const {
                item_code,
                brand,
                item_name,
                unit_measurement,
                item_category,
                unit_price
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
                unit_price:unit_price
            })
        }
        console.log(item_name);
    })
    }      
  }

    function handleclick(event) {
        inventoryDetails.push(details);
        console.log(inventoryDetails);
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
        setData(inventoryDetails);

      event.preventDefault();
     
    //   return (
    //     // ReactDOM.render(<Table />, document.getElementById('root'))
    // );
    ;
    
  }
 

 return (
    <div className="inv-form crd">
        <p className="text-color" style={{textAlign:"center", paddingTop:"0px", paddingBottom:"0px"}}>Inventory Entry</p>
            <form style={{width:"50%"}}>
                <div className="form-row" style={{width:"200%", paddingLeft:"30px"}}>
                    <div className="form-group col-md-3">
                        <label for="item_code">Item Code</label>
                        <input type="text" class="form-control" id="item_code" placeholder="Item Code" name="item_code" onBlur={handleBlur} onChange={handleChange} value={details.item_code} />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="brand">Brand</label>
                        <input type="text" class="form-control" id="brand" placeholder="Brand" name="brand" onChange={handleChange} value={details.brand} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="item_name">Item Name</label>
                        <input type="text" class="form-control" id="item_name" placeholder="Item Name" name="item_name" onChange={handleChange} value={details.item_name} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="item_category">Item Category</label>
                        <input type="text" class="form-control" id="item_category" placeholder="Item Category" name="item_category" onChange={handleChange} value={details.item_category} />
                    </div>
                </div>
                <div className="form-row" style={{width:"200%", paddingLeft:"30px"}}>
                    <div class="form-group col-md-3">
                        <label for="uom">Unit of measurement</label>
                        <input type="text" class="form-control" id="uom" placeholder="Unit of measurement" name="unit_measurement" onChange={handleChange} value={details.unit_measurement} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="quantity">Quantity</label>
                        <input type="text" class="form-control" id="quantity" placeholder="Quantity" name="quantity" onChange={handleChange} value={details.quantity} />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="unit_prce">Unit Price</label>
                        <input type="text" class="form-control" id="unit_prce" placeholder="Unit Price" name="unit_price" onChange={handleChange} value={details.unit_price} />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="total_value">Total Value</label>
                        <input type="text" class="form-control" id="total_value" placeholder="Total Value" name="total_value"  value={details.unit_price*details.quantity} />
                    </div>
                </div>
            </form>
            <div style={{paddingLeft:"359px", paddingBottom:"20px"}}>
                <button class="btn btn-success btn-inv" type="submit" onClick={handleclick}>ADD</button>
                <button class="btn btn-success btn-inv" type="submit">UPDATE</button>
                <button class="btn btn-inv btn-danger" type="submit">REMOVE</button>
                <button class="btn btn-success btn-inv" type="submit">VIEW</button>
            </div>

            <div className="container p-2">
                <div className="row">
                <div className="col">
                 <Table headers={Object.keys(schema)} rows={data} />
                </div>
                </div>
                 
             </div>
        </div>
    );
}

export default Inv_form2;
export {inventoryDetails};