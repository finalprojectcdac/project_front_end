import React, { useState } from "react";
import user from "../../service/serviceLayer";
import Alert from "react-s-alert";

const itemsSoldList = [];
let arrayOfItemSaleObjects = [];
let arrayOfQuantityUpdate = [];

function BillForm(props) {
  const [details, setDetails] = useState({
    //conatins billing obj
    invoice_no: props.billNo,
    item_code: "",
    brand: "",
    item_name: "",
    quantity: "",
    unit_measurement: "",
    selling_price: "",
  });

  const [updateObject, setUpdateObject] = useState({
    //contains item code and quantity
    item_code: "",
    quantity: "",
  });

  const [isFound, setIsFound] = useState(true); //to enable and disable the quantity field
  const [disableAddButton, setDisableAddButton] = useState(true);

  // function checkAllObj() {
  //   console.log("checking of variable will be done here");
  //   console.log("item sold list:-");
  //   console.log(itemsSoldList);
  //   console.log("Array of ItemSale Object:");
  //   console.log(arrayOfItemSaleObjects);
  //   console.log("Array of Quantity Object:");
  //   console.log(arrayOfQuantityUpdate);
  //   console.log("Details Object:");
  //   console.log(details);
  //   console.log("updateQuantity Object:");
  //   console.log(updateObject);
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "item_code" && value === "") {
      props.getQuantityAndPrice("");
      setDisableAddButton(true);
      setDetails({
        invoice_no: props.billNo,
        item_code: "",
        brand: "",
        item_name: "",
        quantity: "",
        unit_measurement: "",
        selling_price: "",
      });
    } else {
      setDisableAddButton(false);
      setDetails((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    }
  }

  function getItemDetailsForSale(item_code) {
    user.getItemDetailsForSale(item_code).then((resp) => {
      const status = resp.data.status;
      //console.log(status);
      if (status === 1) {
        //status 1 is when we have entry in both inventory and retail table
        const {
          item_code,
          brand,
          item_name,
          quantity,
          unit_measurement,
          selling_price,
        } = resp.data.bo; //billing object data to
        if (selling_price === -1) {
          //console.log("Selling Price not set");
          Alert.error("Entered item is not for sale. Contact manager!");
          setIsFound(false);
          setDisableAddButton(true);
          setDetails({
            invoice_no: props.billNo,
            item_code: "",
            item_name: "",
            unit_measurement: "",
            quantity: "",
            selling_price: "",
          });
        } else {
          setIsFound(true);
          setDisableAddButton(false);
          setUpdateObject({
            item_code: item_code,
            quantity: quantity,
          });
          setDetails({
            invoice_no: props.billNo,
            item_code: item_code,
            item_name: brand + " " + item_name,
            unit_measurement: unit_measurement,
            quantity: "",
            selling_price: selling_price,
          });
          //check weather the item is already in item list
          //if it is then check the list and change update quantity value accordingly
          for (let i = 0; i < itemsSoldList.length; i++) {
            if (itemsSoldList[i].item_code === details.item_code) {
              setUpdateObject({
                item_code: item_code,
                quantity: quantity - itemsSoldList[i].quantity,
              });
            }
          }
        }
      } else if (status === 2) {
        //status 2 is when we have entry only in  inventory and not  retail table
        //the segment will be invoked only if there has been some manual manupulation
        alert("The item is NOT ready for sale....");
        setIsFound(false);
        setDisableAddButton(true);
        setDetails({
          invoice_no: props.billNo,
          item_code: "",
          item_name: "",
          unit_measurement: "",
          quantity: "",
          total_value: "",
        });
      } else {
        Alert.error("Item not found in inventory!");
        setIsFound(false);
        setDisableAddButton(true);
        setDetails({
          invoice_no: props.billNo,
          item_code: "",
          item_name: "",
          unit_measurement: "",
          quantity: "",
          total_value: "",
        });
      }
    });
  }

  function handleBlur(event) {
    const item_code = event.target.value;
    if (item_code !== "") {
      //console.log("blur called with item_code: " + item_code);
      getItemDetailsForSale(item_code);
      props.getQuantityAndPrice(item_code); //setting up the Quantity and Price card.
    }
  }
  //check function for debuging purpose

  function handleAdd(event) {
    if (details.quantity <= updateObject.quantity && details.quantity > 0) {
      arrayOfQuantityUpdate.push({
        item_code: details.item_code,
        quantity: updateObject.quantity - details.quantity,
      });
      // updateItemQuantity(
      //   details.item_code,
      //   updateObject.quantity - details.quantity
      // ); //this will update the quantity and total_value of the items in the inventory table

      itemsSoldList.push(details); //this is pushing the details object in the array
      arrayOfItemSaleObjects = itemsSoldList.map((item) => {
        return {
          invoice_no: item.invoice_no,
          item_code: item.item_code,
          quantity_sold: item.quantity,
        };
      });

      //console.log(arrayOfItemSaleObjects);

      props.onAdd(details); //this will add details in the table below

      setDetails({
        invoice_no: props.billNo,
        item_code: "",
        brand: "",
        item_name: "",
        quantity: "",
        unit_measurement: "",
        selling_price: "",
      }); //to make the fields of billForm empty

      // for (let i = itemsSoldList.length - 1; i < itemsSoldList.length; i++) {
      //   sumOfQuantity += parseInt(itemsSoldList[i].quantity); //adds the total quantity and shows it below the table
      //   totalAmount += parseFloat(
      //     itemsSoldList[i].quantity * itemsSoldList[i].selling_price
      //   ); //adds the total value and shows it below the table
      //   break;
      // }
      // localStorage.setItem("sumOfQuantity", sumOfQuantity);
      // localStorage.setItem("totalAmount", totalAmount);
      Alert.success("Item added to the table!");
    } else if (details.quantity === 0 || details.quantity === "") {
      Alert.error("Please enter the quantity!");
    } else {
      Alert.error("Entered quantity exceeds the quantity available in store!");
    }
    setDisableAddButton(true);
  }

  return (
    <div className="bill-form crd">
      <p
        className="text-color"
        style={{
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "0px",
        }}
      >
        Items
      </p>
      <form style={{ width: "50%" }}>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div className="form-group col-md-3">
            <label for="bill_no">Bill No.</label>
            <input
              type="text"
              class="form-control"
              id="bill_no"
              placeholder="Bill No."
              name="bill_no"
              // onChange={handleChange}
              value={props.billNo}
              disabled
            />
          </div>
          <div class="form-group col-md-3">
            <label for="item_code">Item Code</label>
            <input
              type="text"
              class="form-control"
              id="item_code"
              placeholder="Item Code"
              name="item_code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={details.item_code}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="item_name">Item Name</label>
            <input
              type="text"
              class="form-control"
              id="item_name"
              placeholder="Item Name"
              name="item_name"
              onChange={handleChange}
              value={details.item_name}
              disabled
            />
          </div>

          <div className="form-group col-md-3">
            <label for="quantity">Quantity</label>
            <input
              type="text"
              class="form-control"
              id="quantity"
              placeholder="Quantity"
              name="quantity"
              onChange={handleChange}
              value={details.quantity}
              disabled={!isFound}
              // onBlur={setPrevQuantity}
            />
          </div>
        </div>
      </form>
      <div style={{ paddingLeft: "890px", paddingBottom: "20px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleAdd}
          disabled={disableAddButton}
        >
          ADD
        </button>
        {/* button created for testing */}
        {/* <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={checkAllObj}
        >
          check
        </button>  */}
        {/* <button class="btn btn-inv btn-danger" type="submit">
          REMOVE
        </button> */}
      </div>
    </div>
  );
}

export default BillForm;
export { arrayOfItemSaleObjects, itemsSoldList, arrayOfQuantityUpdate };
