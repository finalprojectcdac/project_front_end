import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import user from "../../service/serviceLayer";
import PurchaseReport from "./PurchaseReport";
import SalesReport from "./SalesReport";
import { Link } from "react-router-dom";
import Alert from "react-s-alert";

function SearchReportForm(props) {
  const [reportType, setReportType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hidePurchaseTable, setHidePurchaseTable] = useState(true);
  const [hideSalesTable, setHideSalesTable] = useState(true);
  const [purchaseReport, setPurchaseReport] = useState([]);
  const [salesReport, setSalesReport] = useState([]);
  const [reportOpen, setReportOpen] = useState("search-report-close");

  function clearTable() {
    setReportType("");
    setStartDate("");
    setEndDate("");
    setHidePurchaseTable(true);
    setPurchaseReport([]);
    setHideSalesTable(true);
    setSalesReport([]);
    setReportOpen("search-report-close");
  }

  function handleClick() {
    if (reportType === "purchaseReport" && startDate !== "" && endDate !== "") {
      setHideSalesTable(true);
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
          setReportOpen("search-report-open");
          setPurchaseReport(resp.data.supplierdtls);
          setHidePurchaseTable(false);
        } else {
          setReportOpen("search-report-close");
          Alert.error("No details found for these dates!");
          setHidePurchaseTable(true);
        }
      });
    } else if (
      reportType === "salesReport" &&
      startDate !== "" &&
      endDate !== ""
    ) {
      setHidePurchaseTable(true);
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

      user.getSalesReport(sd, ed).then((resp) => {
        const status = resp.data.status;
        if (status === 1) {
          setReportOpen("search-report-open");
          setSalesReport(resp.data.invoiceList);
          // console.log(salesReport);
          setHideSalesTable(false);
        } else {
          setReportOpen("search-report-close");
          Alert.error("No details found for these dates!");
          setHideSalesTable(true);
        }
      });
    } else {
      clearTable();
      Alert.error("Error! Fields empty!");
    }
  }

  return (
    <div className={reportOpen}>
      <div style={{ height: "50px" }}>
        <p
          className="text-color"
          style={{
            textAlign: "center",
            paddingTop: "0px",
            paddingBottom: "0px",
          }}
        >
          Generate Report
        </p>
        <Link to="/monitoring">
          <button
            className="btn btn-inv btn-success btn-sm"
            style={{ position: "absolute", left: "1010px", top: "10px", height:"min-content" }}
          >
            <b>CLOSE</b>
          </button>
        </Link>
      </div>
      <form style={{ width: "100%" }}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <span
              style={{ position: "absolute", width: "225px", left: "20px" }}
            >
              <label for="reportType">Type of Report</label>
              <select
                className="form-control"
                onChange={(event) => {
                  setReportType(event.target.value);
                }}
              >
                <option className="form-control" id="reportType" value="">
                  ---Select Report Type---
                </option>
                <option
                  className="form-control"
                  id="reportType"
                  value="purchaseReport"
                >
                  Purchase Report
                </option>
                <option
                  className="form-control"
                  id="reportType"
                  value="salesReport"
                >
                  Sales Report
                </option>
              </select>
            </span>
            <span
              style={{
                position: "absolute",
                left: "300px",
                width: "225px",
              }}
            >
              <label for="startDate">Start Date</label>
              <DatePicker
                className="form-control date-picker"
                id="startDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
                value={startDate}
              />
            </span>
            <span
              style={{
                position: "absolute",
                left: "570px",
                width: "225px",
              }}
            >
              <label for="endDate">End Date</label>
              <DatePicker
                className="form-control date-picker"
                id="endDate"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
                value={endDate}
              />
            </span>
          </div>
        </div>
      </form>
      <div>
        <button
          style={{ position: "absolute", left: "860px" }}
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleClick}
        >
          SEARCH
        </button>
        <button
          style={{ position: "absolute", left: "990px" }}
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
      <PurchaseReport
        hidePurchaseTable={hidePurchaseTable}
        purchaseReport={purchaseReport}
      />
      <SalesReport hideSalesTable={hideSalesTable} salesReport={salesReport} />
    </div>
  );
}

export default SearchReportForm;
