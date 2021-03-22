import React, { useEffect, useState } from "react";
import BillForm from "../components/billing-components/BillForm";
import BillTable from "../components/billing-components/BillTable";
import HorizontalNavbar from "../components/general-components/HorizontalNavbar";
import CustomerForm from "../components/billing-components/CustomerForm";
import VerticalNavbar from "../components/general-components/VerticalNavbar";
import user from "../service/serviceLayer";
import TotalTable from "../components/billing-components/TotalTable";
import RtdBar from "../components/inv-components/RtdBar";
import MainButton from "../components/billing-components/MainButton";

function BillingPage() {
  const [tableRows, setTableRows] = useState([]);

  const [billNo, setBillNo] = useState("");

  useEffect(getBillNO, []);

  const [rtd, setRtd] = useState({
    totalNoOfItems: "",
    totalItemValue: "",
  });

  useEffect(getRealTimeData, []);

  function getRealTimeData() {
    user.getRealTimeData().then((resp) => {
      const { totalNoOfItems, totalItemValue } = resp.data.rtd;
      setRtd({
        totalNoOfItems: totalNoOfItems,
        totalItemValue: totalItemValue,
      });
    });
  }

  function getBillNO() {
    user.getSaleInvoiceNo().then((rsp) => {
      const billNo = rsp.data;
      setBillNo(billNo);
    });
  }

  function addRow(details) {
    setTableRows((prevRows) => {
      return [...prevRows, details];
    });
  }

  return (
    <div>
      <HorizontalNavbar userName="User" />
      <VerticalNavbar />
      <RtdBar
        totalNoOfItems={rtd.totalNoOfItems}
        totalItemValue={rtd.totalItemValue}
      />
      <BillForm billNo={billNo} onAdd={addRow} />
      <CustomerForm billNo={billNo} />
      <BillTable tableRows={tableRows} />
      <TotalTable />
      <MainButton />
    </div>
  );
}

export default BillingPage;
