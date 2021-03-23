import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as ReactBootStrap from "react-bootstrap";

function DateForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function handleClick() {
    console.log(startDate.getFullYear()+"-"+(startDate.getMonth()+1)+"-"+startDate.getDate());
    console.log(endDate.getFullYear()+"-"+(endDate.getMonth()+1)+"-"+endDate.getDate());
  }

  return (
    <div className="search-report crd">
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
              value={startDate}
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
              value={endDate}
            />
          </div>
        </div>
      </form>
      <div style={{ position: "absolute", left: "980px", bottom: "396px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleClick}
        >
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
      <div className="search-table">
        <ReactBootStrap.Table striped bordered className="table-sm">
          <thead className="thead-dark">
            <tr>
              <th className="sticky-heading">Item Code</th>
              <th className="sticky-heading">Brand</th>
              <th className="sticky-heading">Item Name</th>
              <th className="sticky-heading">Quantity</th>
              <th className="sticky-heading">Unit Measurement</th>
              <th className="sticky-heading">Cost Price</th>
              <th className="sticky-heading">Selling Price</th>
            </tr>
          </thead>
          {/* <tbody>{tableRows.map(renderTableColoumn)}</tbody> */}
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default DateForm;
