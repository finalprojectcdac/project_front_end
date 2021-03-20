import React, { useState, useEffect } from "react";
import HorizontalNavbar from "../components/general-components/HorizontalNavbar";
import VerticalNavbar from "../components/general-components/VerticalNavbar";
import RtdBar from "../components/inv-components/RtdBar";
import DateForm from "../components/monitoring-components/DateForm";
import InventoryItemTable from "../components/monitoring-components/InventoryItemTable";
import user from "../service/serviceLayer";

function MonitoringPage() {
  useEffect(getRealTimeData, []);
  useEffect(getBillingObjDetails, []);
  const [rtd, setRtd] = useState({
    totalNoOfItems: "",
    totalItemValue: "",
  });

  const [arrayOfBillingObject, setArrayOfBillingObject] = useState([])

  function getRealTimeData() {
    user.getRealTimeData().then((resp) => {
      const { totalNoOfItems, totalItemValue } = resp.data.rtd;
      setRtd({
        totalNoOfItems: totalNoOfItems,
        totalItemValue: totalItemValue,
      });
    });
  }

  function getBillingObjDetails() {
    user.getArrayOfBillingObject().then((resp) => {
      if (resp.data.status === 1) {
        setArrayOfBillingObject(resp.data.billingObjList);
        console.log(arrayOfBillingObject);
      }
    });
  }

  console.log(arrayOfBillingObject);

  return (
    <div>
      <HorizontalNavbar />
      <VerticalNavbar />
      <RtdBar
        totalNoOfItems={rtd.totalNoOfItems}
        totalItemValue={rtd.totalItemValue}
      />
      <InventoryItemTable tableRows={arrayOfBillingObject} />
      <DateForm />
    </div>
  );
}

export default MonitoringPage;
