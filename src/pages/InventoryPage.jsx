import React, { useEffect, useState } from "react";
import VerticalNavbar from "../components/general-components/VerticalNavbar";
import RtdBar from "../components/inv-components/RtdBar";
import SupplierForm from "../components/inv-components/SupplierForm";
import user from "../service/serviceLayer";
import InvForm from "../components/inv-components/InvForm";
import MainButton from "../components/inv-components/MainButton";
import InvTable from "../components/inv-components/InvTable";
import TotalTable from "../components/inv-components/TotalTable";
import Footer from "../components/general-components/Footer";
import Header from "../components/general-components/Header";
function InventoryPage() {
  const [tableRows, setTableRows] = useState([]);

  const [rtd, setRtd] = useState({
    totalNoOfItems: "",
    totalItemValue: "",
  });

  useEffect(getRealTimeData, []);

  function getRealTimeData() {
    user.getRealTimeData().then((resp) => {
      const { totalNoOfItems, totalItemValue } = resp.data.rtd;
      if(totalNoOfItems === 0) {
        setRtd({
          totalNoOfItems: "-",
          totalItemValue: "-"
        })
      } else{
      setRtd({
        totalNoOfItems: totalNoOfItems + " ITEM(S)",
        totalItemValue: "₹ " + totalItemValue,
      });
    }
    });
  }

  function addRow(details) {
    setTableRows((prevRows) => {
      return [...prevRows, details];
    });
  }

  return (
    <div>
      <Header />
      <VerticalNavbar />
      <RtdBar
        totalNoOfItems={rtd.totalNoOfItems}
        totalItemValue={rtd.totalItemValue}
      />
      <SupplierForm />
      <InvForm onAdd={addRow} />
      <InvTable tableRows={tableRows} />
      <TotalTable />
      <MainButton />
      <Footer />
    </div>
  );
}

export default InventoryPage;
