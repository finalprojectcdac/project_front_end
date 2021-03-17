import React ,{useState} from 'react';
import user from '../../service/serviceLayer';
function BillForm() {
  const billno=0; //this will be set on service function
  
    const [details, setDetails] = useState({
    item_code:"",
    billno:"",
    item_name:"",
    unit_measurement: "",
    quantity:"",
    total_value:""
    });

    function getBillNO()
    {
      user.getSaleInvoiceNo().then(rsp =>{
        console.log(rsp.data);
      });
    }
    function handleChange(event) {
      const { name, value } = event.target;
      setDetails(prevValue => {
        return {...prevValue, [name]:value };});}

    function handleBlur()
    {
      console.log("blur called");
    }
    //check function for debuging purpose
  function checkAllObj(){
    console.log("checking of variable will be done here");
    console.log("Bill No.");
    console.log(billno);
    console.log("Details:-");
    console.log(details);
}
  
    return (
        <div className="bill-form crd">
    <form >
      <fieldset>
        <legend className="text-color">Items</legend>

        <div class="form-group row">
          <label class="col-sm-4 control-label" for="bill_no">
            Bill No.
              </label>
          <div class="col-md-8">
            <input
              id="bill_no"
              name="bill_no"
              type="text"
              placeholder="Bill No."
              class="form-control input-md"
              required=""
              disabled
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="item_code">
            Item Code
              </label>
          <div class="col-md-8">
            <input
              id="item_code"
              name="item_code"
              type="text"
              placeholder="Item Code"
              class="form-control input-md"
              required=""
              onBlur={handleBlur}
              onChange={handleChange}
              value={details.item_code} 
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="quantity">
            Quantity
              </label>
          <div class="col-md-8">
            <input
              id="quantity"
              name="quantity"
              type="text"
              placeholder="Quantity"
              class="form-control input-md"
              onChange={handleChange}
              value={details.quantity} 
            />
          </div>
        </div>
        </fieldset>
        </form>
        <div class="form-group row">
          <div class="col-auto">
            <button id="addinv" name="addinv" class="btn btn-success btn-inv" 
           >
              ADD
                </button>
            <button id="updateinv" name="updateinv" class="btn btn-danger btn-remove">
              Remove
                </button>
                {/* button created for testing */}
                <button class="btn btn-success btn-inv" type="submit" 
                onClick={checkAllObj}>check</button>
                {/* dummy to fetch bill no */}
                <button class="btn btn-success btn-inv" type="submit" 
                onClick={getBillNO}>GET bill no</button>
          </div>
        </div>
    
    
  </div>
    );
}

export default BillForm;
