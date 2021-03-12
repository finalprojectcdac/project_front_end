import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function inv_form(){
 
 
 
 
 
 return (<div className="inv-form crd">
    {/* <div class="card  container-fluid"> */}
    <form class="form-horizontal align-items-center ">
      <fieldset>
        <legend className="text-color">Inventory Entry</legend>

        <div class="form-group row">
          <label class="col-sm-4 control-label" for="item_code">
            Item code
              </label>
          <div class="col-md-4">
            <input
              id="item_code"
              name="item_code"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
              required=""
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="brand">
            Brand
              </label>
          <div class="col-md-4">
            <input
              id="brand"
              name="brand"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
              required=""
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="item_name">
            Item Name
              </label>
          <div class="col-md-4">
            <input
              id="item_name"
              name="item_name"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="unit_price">
            Unit price
              </label>
          <div class="col-md-4">
            <input
              id="unit_price"
              name="unit_price"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="quantity">
            Quantity
              </label>
          <div class="col-md-4">
            <input
              id="quantity"
              name="quantity"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="unit_measurement">
            Unit Measurement
              </label>
          <div class="col-md-4">
            <input
              id="unit_measurement"
              name="unit_measurement"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="stock_entry_date">
            Stock Entry Date
              </label>
          <div class="col-md-4">
            <input
              id="stock_entry_date"
              name="stock_entry_date"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="item_category">
            Item Category
              </label>
          <div class="col-md-4">
            <input
              id="item_category"
              name="item_category"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="total_value">
            Total Value
              </label>
          <div class="col-md-4">
            <input
              id="total_value"
              name="total_value"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="supplier_invoice_no">
            Supplier Invoice no.
              </label>
          <div class="col-md-4">
            <input
              id="supplier_invoice_no"
              name="supplier_invoice_no"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
          </div>
        </div>

        <div class="form-group row">
          {/* <label class="col-md-4 control-label" for="addinv"></label> */}
          <div class="col-auto">
            <button id="addinv" name="addinv" class="btn btn-success btn-inv">
              ADD
                </button>
            <button id="addinv" name="addinv" class="btn btn-success btn-inv">
              view
                </button>
            <button id="addinv" name="addinv" class="btn btn-success btn-inv">
              UPDATE
                </button>
            <button id="updateinv" name="updateinv" class="btn btn-danger btn-remove">
              Remove
                </button>
          </div>
        </div>
      </fieldset>
    </form>
    {/* </div> */}
  </div>);
}

export default inv_form;