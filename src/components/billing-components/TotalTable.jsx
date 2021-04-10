import React from "react";

function TotalTable(props) {
  return (
    <div>
      <div
        class="card crd"
        style={{ width: "30%", height: "50px", left: "16%", top: "-390px" }}
      >
        <h4
          class="card-title text-color text-bold"
          style={{ paddingTop: "12px" }}
        >
          <span style={{ width: "50px", paddingLeft: "25px" }}>
            {/* Total Quantity: {localStorage.getItem("sumOfQuantity")} nos. */}
            Total Quantity: {props.sumOfQuantity} nos.
          </span>
        </h4>
      </div>
      <div
        class="card crd"
        style={{ width: "30%", height: "50px", left: "65%", top: "-440px" }}
      >
        <h4
          class="card-title text-color text-bold"
          style={{ paddingTop: "12px" }}
        >
          <span style={{ width: "50px", paddingLeft: "25px" }}>
            {/* Total Amout: ₹ {localStorage.getItem("totalAmount")} */}
            Total Amout: ₹ {props.totalAmount}
            {localStorage.setItem("totalAmount", props.totalAmount)}
          </span>
        </h4>
      </div>
    </div>
  );
}

export default TotalTable;
