import React from 'react';

function CustomerForm() {
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
            />
          </div>
        </div>
      </fieldset>
    </form>
        </div>
    );
}

export default CustomerForm;