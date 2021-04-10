import React from "react";

function TotalTable(props) {
  return (
    <div>
      <div
        class="card crd"
        style={{ width: "30%", height: "50px", left: "16%", top: "-45px" }}
      >
        <h4
          class="card-title text-color text-bold"
          style={{ paddingTop: "12px" }}
        >
          <span style={{ width: "50px", paddingLeft: "25px" }}>
            Total Quantity: {props.sumOfQuantity} nos.
          </span>
        </h4>
      </div>
      <div
        class="card crd"
        style={{ width: "30%", height: "50px", left: "65%", top: "-95px" }}
      >
        <h4
          class="card-title text-color text-bold"
          style={{ paddingTop: "12px" }}
        >
          <span style={{ width: "50px", paddingLeft: "25px" }}>
            Total Amout: ₹ {props.totalAmount}
          </span>
        </h4>
      </div>
    </div>
    //     <div className="total-table" style={{top:"1090px"}}>
    //         <ReactBootStrap.Table striped bordered className="table-sm">
    //             <thead className="thead-dark">
    //                 <tr>
    //                     <th style={{width:"730px"}}>GRAND TOTAL</th>
    //                     <th style={{width:"112px"}}>{sumOfQuantity}</th>
    //                     <th style={{width:"122px"}}></th>
    //                     <th>{totalAmount}</th>
    //                 </tr>
    //             </thead>
    //         </ReactBootStrap.Table>
    //   </div>
  );
}

export default TotalTable;
