import React, { useState } from "react";

function RtdBar(props) {
  const totalNoOfItems = props.totalNoOfItems;
  const totalItemValue = props.totalItemValue;
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
    <div className="row rtdBar" style={{ marginLeft: "-3%", marginRight:"0%" }}>
      <div className="col-sm">
        <div className="card crd">
          <div className="card-body ">
            <h5
              className="card-title text-center text-color fw-bold"
              style={{ padding: "0px" }}
            >
              NUMBER OF ITEMS
            </h5>
            <h4 className="card-text text-center" style={{ padding: "0px" }}>
              {totalNoOfItems}
            </h4>
          </div>
        </div>
      </div>
      <div className="col-sm ">
        <div className="card crd">
          <div className="card-body ">
            <h5
              className="card-title text-center text-color text-bold"
              style={{ padding: "0px" }}
            >
              VALUE OF ITEMS
            </h5>
            <h4 className="card-text text-center" style={{ padding: "0px" }}>
              {totalItemValue}
            </h4>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="card crd">
          <div className="card-body">
            <h5
              className="card-title text-center text-color fw-bold"
              style={{ padding: "0px" }}
            >
              DATE
            </h5>
            <h4 className="card-text text-center" style={{ padding: "0px" }}>
              {date}
            </h4>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="card crd">
          <div className="card-body">
            <h5
              className="card-title text-center text-color fw-bold"
              style={{ padding: "0px" }}
            >
              TIME
            </h5>
            <h4 className="card-text text-center" style={{ padding: "0px" }}>
              {time}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RtdBar;
