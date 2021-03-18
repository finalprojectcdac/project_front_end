import React,{useState} from 'react';



function CustomerForm() {
  const [cust_details, setDetails] = useState({
    mobile_no:"",
    customer_name:"",
    amount_received:""
    });
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
    console.log("Details:-");
    console.log(cust_details);
  }
    return (
        <div className="customer-form crd">
            <form class="form-horizontal align-items-center ">
      <fieldset>
        <legend className="text-color">Customer</legend>

        <div class="form-group row">
          <label class="col-sm-4 control-label" for="mobile_no">
            Mobile No.
              </label>
          <div class="col-md-8">
            <input
              id="mobile_no"
              name="mobile_no"
              type="text"
              placeholder="Mobile No."
              class="form-control input-md"
              required=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={cust_details.mobile_no} 
            />
          </div>
        </div>
        
        <div class="form-group row">
          <label class="col-md-4 control-label" for="customer_name">
            Name
              </label>
          <div class="col-md-8">
            <input
              id="customer_name"
              name="customer_name"
              type="text"
              placeholder="Name"
              class="form-control input-md"
              required=""
              onChange={handleChange}
              value={cust_details.customer_name} 
            />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-4 control-label" for="amount_received">
              Amout Received
            </label>
            <div class="col-md-8">
              <input
                id="amount_received"
                name="amount_received"
                type="text"
                placeholder="Amout Received"
                class="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
      </form>
      {/* button created for testing */}
    <button class="btn btn-success btn-inv" type="submit" 
                onClick={checkAllObj}>check</button>

    </div>
  );
}

export default CustomerForm;
