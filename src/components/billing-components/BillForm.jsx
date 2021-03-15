import React from 'react';

function BillForm() {

    return (
        <div className="bill-form crd">
    {/* <div class="card  container-fluid"> */}
    <form class="form-horizontal align-items-center ">
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
            />
          </div>
        </div>

        <div class="form-group row">
          {/* <label class="col-md-4 control-label" for="addinv"></label> */}
          <div class="col-auto">
            <button id="addinv" name="addinv" class="btn btn-success btn-inv" 
           >
              ADD
                </button>
            <button id="updateinv" name="updateinv" class="btn btn-danger btn-remove">
              Remove
                </button>
          </div>
        </div>
      </fieldset>
    </form>
    {/* </div> */}
  </div>
    );
}

export default BillForm;
