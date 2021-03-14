import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import user from '../../service/serviceLayer';

let supplierObj = {};

function SupplierForm() {

    const [details, setDetails] = useState({

        supplier_name: "",
        supplier_code: "",
        supplier_invoice_number: "",
        supplier_invoice_value: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setDetails(prevValue => {
            if (name === "supplier_name") {
                return {
                    supplier_name: value,
                    supplier_code: prevValue.supplier_code,
                    supplier_invoice_number: prevValue.supplier_invoice_number,
                    supplier_invoice_value: prevValue.supplier_invoice_value
                };
            }
            else if (name === "supplier_code") {
                return {
                    supplier_name: prevValue.supplier_name,
                    supplier_code: value,
                    supplier_invoice_number: prevValue.supplier_invoice_number,
                    supplier_invoice_value: prevValue.supplier_invoice_value
                };

            } else if (name === "supplier_invoice_number") {
                return {
                    supplier_name: prevValue.supplier_name,
                    supplier_code: prevValue.supplier_code,
                    supplier_invoice_number: value,
                    supplier_invoice_value: prevValue.supplier_invoice_value
                };
            } else if (name === "supplier_invoice_value") {
                return {
                    supplier_name: prevValue.supplier_name,
                    supplier_code: prevValue.supplier_code,
                    supplier_invoice_number: prevValue.supplier_invoice_number,
                    supplier_invoice_value: value
                };
            }
        });
    }

    function handleAdd(event) {
        supplierObj=details;
        console.log(supplierObj);
        event.preventDefault();

    }

    function handleRemove() {
        let btnClear = document.querySelector('button');
        let inputs = document.querySelectorAll('input');

        btnClear.addEventListener('click',() => {
            inputs.forEach(input => input.value = "")
        });
   }

   function handleBlur(event){
    const supplier_name = details.supplier_name;
    console.log(supplier_name);
    user.getSupplierDetails(supplier_name).then(resp => {
        const{
            supplier_name,
            supplier_code,
            supplier_invoice_number,
            supplier_invoice_value
            }=resp.data.supplierdtls;
      console.log(resp.data);
    const status = resp.data.status;
    if(status === 1) {
        setDetails({
         supplier_name: supplier_name,
        supplier_code: supplier_code,
        supplier_invoice_number: supplier_invoice_number,
        supplier_invoice_value: supplier_invoice_value
         })
        }

     })  
        
        event.preventDefault();
    }

    return (
        <div className="supplier-form crd">
        <p className="text-color" style={{textAlign:"center"}}>Supplier Details</p>
            <form style={{width:"50%"}}>
                <div className="form-row" style={{width:"200%", paddingLeft:"30px"}}>
                    <div className="form-group col-md-3">
                        <label for="supplier_name">Supplier Name</label>
                        <input type="text" class="form-control" id="supplier_name" placeholder="Supplier Name" name="supplier_name" onBlur={handleBlur} onChange={handleChange} value={details.supplier_name} />
                       
                    </div>
                    <div class="form-group col-md-3">
                        <label for="supplier_code">Supplier Code</label>
                        <input type="text" class="form-control" id="supplier_code" placeholder="Supplier Code" name="supplier_code" onChange={handleChange} value={details.supplier_code} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="invoice_number">Invoice Number</label>
                        <input type="text" class="form-control" id="invoice_number" placeholder="Invoice Number" name="supplier_invoice_number" onChange={handleChange} value={details.supplier_invoice_number} />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="invoice_value">Invoice Value</label>
                        <input type="text" class="form-control" id="invoice_value" placeholder="Invoice Value" name="supplier_invoice_value" onChange={handleChange} value={details.supplier_invoice_value}/>
                    </div>
                </div>
            </form>
            <div style={{paddingLeft:"280px", paddingBottom:"20px"}}>
                <button class="btn btn-success btn-sup" type="submit" onClick={handleAdd}>ADD</button>
                <button class="btn btn-success btn-sup" type="submit" onClick={handleRemove} style={{ marginLeft: "10px" }}> CLEAR</button>
            </div>
        </div>
    );
}

export default SupplierForm;
export { supplierObj };