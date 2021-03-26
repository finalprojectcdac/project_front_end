import React, { useState } from "react";

function RtdBar(props) {
  const todaysSale = props.todaysSale;
  const noOfItemsWithoutSp = props.noOfItemsWithoutSp;
  const today = new Date().toLocaleDateString();
  const now = new Date().toLocaleTimeString();

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(now);

  function updateRtdBar() {
    const newDate = new Date().toLocaleDateString();
    const newTime = new Date().toLocaleTimeString();
    setDate(newDate);
    setTime(newTime);
  }

  setInterval(updateRtdBar, 1000);

  return (
    <div className="row rtdBar" style={{ marginLeft: "-2%" }}>
      <div class="col-sm">
        <div class="card crd">
          <div class="card-body ">
            <h5
              class="card-title text-center text-color fw-bold"
              style={{ padding: "0px" }}
            >
              TODAY'S SALE
            </h5>
            <h4 class="card-text text-center" style={{ padding: "0px" }}>
            {todaysSale}
            </h4>
          </div>
        </div>
      </div>
      <div class="col-sm ">
        <div class="card crd">
          <div class="card-body ">
            <h5
              class="card-title text-center text-color text-bold"
              style={{ padding: "0px" }}
            >
              SP TO SET
            </h5>
            <h4 class="card-text text-center" style={{ padding: "0px" }}>
              {noOfItemsWithoutSp}
            </h4>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card crd">
          <div class="card-body">
            <h5
              class="card-title text-center text-color fw-bold"
              style={{ padding: "0px" }}
            >
              DATE
            </h5>
            <h4 class="card-text text-center" style={{ padding: "0px" }}>
              {date}
            </h4>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card crd">
          <div class="card-body">
            <h5
              class="card-title text-center text-color fw-bold"
              style={{ padding: "0px" }}
            >
              TIME
            </h5>
            <h4 class="card-text text-center" style={{ padding: "0px" }}>
              {time}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RtdBar;
