import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as ReactBootStrap from "react-bootstrap";
import user from "../../service/serviceLayer";

function SearchReport() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hidePurchaseTable, setHidePurchaseTable] = useState(true);
  const [purchaseReport, setPurchaseReport] = useState([]);

  const renderTableColoumn = (supplier, index) => {
    return (
      <tr key={index}>
        <td>{supplier.supplier_name}</td>
        <td>{supplier.supplier_code}</td>
        <td>{supplier.supplier_invoice_number}</td>
        <td>{supplier.purchase_date}</td>
        <td>₹ {supplier.supplier_invoice_value}</td>
      </tr>
    );
  };

  function clearTable() {
    setStartDate("");
    setEndDate("");
    setHidePurchaseTable(true);
    setPurchaseReport([]);
  }

  function handleClick() {
    if (startDate !== "" && endDate !== "") {
      const sd =
        startDate.getFullYear() +
        "-" +
        (startDate.getMonth() + 1) +
        "-" +
        startDate.getDate();
      const ed =
        endDate.getFullYear() +
        "-" +
        (endDate.getMonth() + 1) +
        "-" +
        endDate.getDate();

      user.getPruchaseReport(sd, ed).then((resp) => {
        const status = resp.data.status;
        if (status === 1) {
          setPurchaseReport(resp.data.supplierdtls);
          setHidePurchaseTable(false);
        } else {
          console.log("No details found.");
          setHidePurchaseTable(true);
        }
      });
    } else {
      console.log("Date fields empty.")
    }
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
      <div>
        <button
          style={{ position: "absolute", left: "880px", bottom: "396px" }}
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleClick}
        >
          SEARCH
        </button>
        <button
          style={{ position: "absolute", left: "990px", bottom: "396px" }}
          class="btn btn-success btn-inv"
          type="submit"
          onClick={clearTable}
        >
          CLEAR
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
      <div className="search-table" hidden={hidePurchaseTable}>
        <ReactBootStrap.Table striped bordered className="table-sm">
          <thead className="thead-dark">
            <tr>
              <th className="sticky-heading">Supplier Name</th>
              <th className="sticky-heading">Supplier Code</th>
              <th className="sticky-heading">Supplier Invoice No.</th>
              <th className="sticky-heading">Purchase Date</th>
              <th className="sticky-heading">Invoice Value</th>
            </tr>
          </thead>
          <tbody>{purchaseReport.map(renderTableColoumn)}</tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}

export default SearchReport;
