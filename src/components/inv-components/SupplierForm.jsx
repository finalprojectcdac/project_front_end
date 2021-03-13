import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

let supplierobj = {};

function SupplierForm() {

    const [details, setDetails] = useState({

        supplier_name: "",
        supplier_code: "",
        invoice_no: "",
        invoice_value: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setDetails(prevValue => {
            if (name === "supplier_name") {
                return {
                    supplier_name: value,
                    supplier_code: prevValue.supplier_code,
                    invoice_no: prevValue.invoice_no,
                    invoice_value: prevValue.invoice_value
                };
            }
            else if (name === "supplier_code") {
                return {
                    supplier_name: prevValue.supplier_name,
                    supplier_code: value,
                    invoice_no: prevValue.invoice_no,
                    invoice_value: prevValue.invoice_value
                };

            } else if (name === "invoice_no") {
                return {
                    supplier_name: prevValue.supplier_name,
                    supplier_code: prevValue.supplier_code,
                    invoice_no: value,
                    invoice_value: prevValue.invoice_value
                };
            } else if (name === "invoice_value") {
                return {
                    supplier_name: prevValue.supplier_name,
                    supplier_code: prevValue.supplier_code,
                    invoice_no: prevValue.invoice_no,
                    invoice_value: value
                };
            }
        });
    }

    function handleAdd(event) {
        supplierobj=details;
        console.log(supplierobj);
        event.preventDefault();

    }

    function handleRemove() {
        let btnClear = document.querySelector('button');
        let inputs = document.querySelectorAll('input');

        btnClear.addEventListener('click',() => {
            inputs.forEach(input => input.value = "")
        });
   }

    return (
        <div className="supplier-form crd">
            <form className="form-horizontal">
            <legend className="text-color">Supplier</legend>


                <div className="form-group row">
                    <label className="col-md-4 control-label" >
                        Supplier Name
              </label>
                    <div className="col-md-4">
                        <input type="text" placeholder=" Supplier Name" name="supplier_name"
                            onChange={handleChange} value={details.supplier_name} ></input>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-md-4 control-label" >
                        Supplier Code
              </label>
                    <div className="col-md-4">
                        <input type="text" placeholder=" Supplier Code" name="supplier_code"
                            onChange={handleChange} value={details.supplier_code} ></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-4 control-label" >
                        Invoice Number
              </label>
                    <div className="col-md-4">
                        <input type="text" placeholder=" Invoice Number" name="invoice_no"
                            onChange={handleChange} value={details.invoice_no} ></input>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-md-4 control-label" >
                        Invoice Value
              </label>
                    <div className="col-md-4">
                        <input type="text" placeholder=" Invoice Value" name="invoice_value"
                            onChange={handleChange} value={details.invoice_value} ></input>
                    </div>
                </div>



                <div className="form-group row">
                    <label className="col-md-4 control-label" ></label>
                    <div className="col-md-8">
                        <button id="button1id" type="submit" name="button1id" className="btn btn-success"
                            onClick={handleAdd}>ADD</button>

                        <button id="button2id" name="button2id" className="btn btn-success" type="submit"
                            onClick={handleRemove} style={{ marginLeft: "10px" }} >CLEAR</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SupplierForm;
export { supplierobj };