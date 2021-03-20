import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="date-form crd">
      <p
        className="text-color"
        style={{
          textAlign: "center",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        Search Report
      </p>
      <form style={{ width: "100%" }}>
        <div
          className="form-row"
          style={{ width: "150%", paddingLeft: "20px" }}
        >
          <div className="form-group col-md-3">
            <label for="startDate">Start Date</label>
            <DatePicker
              className="form-control"
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
            />
          </div>
          <div className="form-group col-md-3">
            <label for="endDate">End Date</label>
            <DatePicker
              className="form-control"
              id="endDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
            />
          </div>
        </div>
      </form>
      <div style={{ position: "absolute", left: "340px", bottom: "28px" }}>
        <button class="btn btn-success btn-inv" type="submit">
          SEARCH
        </button>
        {/* button created for testing */}
        {/* <button
    class="btn btn-success btn-inv"
    type="submit"
    onClick={checkAllObj}
  >
    check
  </button> */}
      </div>
    </div>
  );
}

export default DateForm;
