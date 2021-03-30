import React, { useState, useEffect } from "react";
import HorizontalNavbar from "../components/general-components/HorizontalNavbar";
import VerticalNavbar from "../components/general-components/VerticalNavbar";
import RtdBar from "../components/monitoring-components/RtdBar";
import SearchReportForm from "../components/monitoring-components/SearchReportForm";
import InventoryItemTable from "../components/monitoring-components/InventoryItemTable";
import user from "../service/serviceLayer";
import UpdateForm from "../components/monitoring-components/UpdateForm";
import UserTable from "../components/monitoring-components/employee-components/UserTable";
import SetEmployeeForm from "../components/monitoring-components/employee-components/SetEmployeeForm";
import Options from "../components/monitoring-components/Options";
import { Switch, Route } from "react-router-dom";

function MonitoringPage() {
  useEffect(getRealTimeData, []);
  useEffect(getArrayOfEmpObject, []);

  const [rtd, setRtd] = useState({
    todaysSale: "",
    noOfItemsWithoutSp: "",
  });

  const [arrayOfBillingObject, setArrayOfBillingObject] = useState([]);
  const [arrayOfEmpObject, setArrayOfEmpObject] = useState([]);
  useEffect(() => {
    getArrayOfBillingObject();
  }, []);

  function getArrayOfBillingObject() {
    user.getArrayOfBillingObject().then((resp) => {
      if (resp.data.status === 1) {
        console.log(resp.data.status);
        setArrayOfBillingObject(resp.data.billingObjList);
      }
    });
  }

  function getArrayOfEmpObject() {
    user.getListOfEmployees().then((resp) => {
      if (resp.data.status === 1) {
        setArrayOfEmpObject(resp.data.empList);
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

      <Options />
      <Switch>
        <Route path="/monitoring/checkinventory">
          <InventoryItemTable tableRows={arrayOfBillingObject} />
        </Route>
        <Route path="/monitoring/updateinventory">
          <InventoryItemTable tableRows={arrayOfBillingObject} />
          <UpdateForm />
        </Route>
        <Route path="/monitoring/generatereport">
          <SearchReportForm />
        </Route>
        <Route path="/monitoring/checkemployees">
          <UserTable tableRows={arrayOfEmpObject} />
        </Route>
        <Route path="/monitoring/manageemployees">
          <UserTable tableRows={arrayOfEmpObject} />
          <SetEmployeeForm />
        </Route>
      </Switch>
    </div>
  );
}

export default MonitoringPage;
