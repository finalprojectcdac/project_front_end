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
  const [totalQuantityAndAmount, setTotalQuantityAndAmount] = useState({
    totalQuantity: 0,
    totalAmount: 0,
  });

  const [rtd, setRtd] = useState({
    totalNoOfItems: "",
    totalItemValue: "",
  });

  useEffect(getRealTimeData, []);

  function getRealTimeData() {
    user.getRealTimeData().then((resp) => {
      const { totalNoOfItems, totalItemValue } = resp.data.rtd;
      if (totalNoOfItems === 0) {
        setRtd({
          totalNoOfItems: "-",
          totalItemValue: "-",
        });
      } else {
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
    setTotalQuantityAndAmount((prevValues) => {
      return {
        totalAmount:
          parseFloat(prevValues.totalAmount) + parseFloat(details.total_value),
        totalQuantity:
          parseInt(prevValues.totalQuantity) + parseInt(details.quantity),
      };
    });
  }

  function deleteRow(id) {
    setTableRows((prevRows) => {
      return prevRows.filter((tableRows, index) => {
        return index !== id;
      });
    });
    setTotalQuantityAndAmount((prevValues) => {
      return {
        totalAmount:
          parseFloat(prevValues.totalAmount) -
          parseFloat(tableRows[id].total_value),
        totalQuantity:
          parseInt(prevValues.totalQuantity) - parseInt(tableRows[id].quantity),
      };
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
      <InvTable tableRows={tableRows} onDelete={deleteRow} />
      <TotalTable
        sumOfQuantity={totalQuantityAndAmount.totalQuantity}
        totalAmount={totalQuantityAndAmount.totalAmount}
      />
      <MainButton totalAmount={totalQuantityAndAmount.totalAmount} />
      <Footer />
    </div>
  );
}

export default InventoryPage;
