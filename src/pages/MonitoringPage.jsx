import React, { useState, useEffect } from "react";
import HorizontalNavbar from "../components/general-components/HorizontalNavbar";
import VerticalNavbar from "../components/general-components/VerticalNavbar";
import RtdBar from "../components/monitoring-components/RtdBar";
import SearchReportForm from "../components/monitoring-components/SearchReportForm";
import InventoryItemTable from "../components/monitoring-components/InventoryItemTable";
import user from "../service/serviceLayer";
import UpdateForm from "../components/monitoring-components/UpdateForm";

function MonitoringPage() {
  useEffect(getRealTimeData, []);
  useEffect(getArrayOfBillingObject, []);

  const [rtd, setRtd] = useState({
    todaysSale: "",
    noOfItemsWithoutSp: "",
  });

  const [arrayOfBillingObject, setArrayOfBillingObject] = useState([]);

  function getArrayOfBillingObject() {
    user.getArrayOfBillingObject().then((resp) => {
      if (resp.data.status === 1) {
        setArrayOfBillingObject(resp.data.billingObjList);
      }
    });
  }

  function getRealTimeData() {
    user.getRealTimeData().then((resp) => {
      const { totalValueofInvoices, totalNoOfItemsWithoutSp } = resp.data.rtd;
      if (totalValueofInvoices === null && totalNoOfItemsWithoutSp === 0) {
        setRtd({
          todaysSale: "₹ 0.00",
          noOfItemsWithoutSp: "-",
        });
      } else if (totalValueofInvoices === null) {
        setRtd({
          todaysSale: "₹ 0.00",
          noOfItemsWithoutSp: totalNoOfItemsWithoutSp,
        });
      } else if (totalNoOfItemsWithoutSp === 0) {
        setRtd({
          todaysSale: "₹ " + totalValueofInvoices,
          noOfItemsWithoutSp: "-",
        });
      } else {
        setRtd({
          todaysSale: "₹ " + totalValueofInvoices,
          noOfItemsWithoutSp: totalNoOfItemsWithoutSp + " ITEM(S)",
        });
      }
    });
  }

  return (
    <div>
      <HorizontalNavbar />
      <VerticalNavbar />
      <RtdBar
        todaysSale={rtd.todaysSale}
        noOfItemsWithoutSp={rtd.noOfItemsWithoutSp}
      />
      <InventoryItemTable tableRows={arrayOfBillingObject} />
      <UpdateForm />
      <SearchReportForm />
    </div>
  );
}

export default MonitoringPage;
