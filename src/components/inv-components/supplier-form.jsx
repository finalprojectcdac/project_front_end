import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function supplier_from(){

  return (<div className="supplier-form crd">
      {/* <div class="card crd container-fluid"> */}
    <form class="form-horizontal">
      <fieldset>
        <legend className="text-color">Supplier</legend>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="Invoicenumber">
            Invoice number
              </label>
          <div class="col-md-4">
            <input
              id="Invoicenumber"
              name="Invoicenumber"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
            
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="Suppliercode">
            Supplier code
              </label>
          <div class="col-md-4">
            <input
              id="Suppliercode"
              name="Suppliercode"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
            
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="totalValue">
            total Value
              </label>
          <div class="col-md-4">
            <input
              id="totalValue"
              name="totalValue"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
            
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="Supplier">
            Supplier
              </label>
          <div class="col-md-4">
            <input
              id="Supplier"
              name="Supplier"
              type="text"
              placeholder="placeholder"
              class="form-control input-md"
            />
           
          </div>
        </div>

        <div class="form-group row">
          <label class="col-md-4 control-label" for="button1id"></label>
          <div class="col-md-8">
            <button id="button1id" name="button1id" class="btn btn-success btn-sup">
              add
                </button>
            <button id="button2id" name="button2id" class="btn btn-danger btn-remove">
              delete
                </button>
          </div>
        </div>
      </fieldset>
    </form>
    
  </div>);
}

export default supplier_from;