import React, { useEffect, useState } from "react";
import BillForm from "../components/billing-components/BillForm";
import BillTable from "../components/billing-components/BillTable";
import CustomerForm from "../components/billing-components/CustomerForm";
import VerticalNavbar from "../components/general-components/VerticalNavbar";
import user from "../service/serviceLayer";
import TotalTable from "../components/billing-components/TotalTable";
import RtdBar from "../components/billing-components/RtdBar";
import MainButton from "../components/billing-components/MainButton";
import Footer from "../components/general-components/Footer";
import Header from "../components/general-components/Header";

function BillingPage() {
  const [tableRows, setTableRows] = useState([]);
  const [totalQuantityAndAmount, setTotalQuantityAndAmount] = useState({
    totalQuantity: 0,
    totalAmount: 0,
  });

  const [billNo, setBillNo] = useState("");

  useEffect(getBillNO, []);

  const [quantityAndPrice, setQuantityAndPrice] = useState({
    availableQuantity: "-",
    itemPrice: "-",
  });

  const getQuantityAndPrice = (item_code) => {
    if (item_code !== "") {
      user.getItemDetailsForSale(item_code).then((resp) => {
        const status = resp.data.status;
        if (status === 1) {
          if (resp.data.bo.selling_price !== -1) {
            setQuantityAndPrice({
              availableQuantity: resp.data.bo.quantity + " nos.",
              itemPrice: "₹ " + resp.data.bo.selling_price,
            });
          } else {
            setQuantityAndPrice({
              availableQuantity: resp.data.bo.quantity + " nos.",
              itemPrice: "-",
            });
          }
        } else {
          setQuantityAndPrice({
            availableQuantity: resp.data.bo.quantity + " nos.",
            itemPrice: "-",
          });
        }
      });
    } else {
      setQuantityAndPrice({
        availableQuantity: "-",
        itemPrice: "-",
      });
    }
  };

  function getBillNO() {
    user.getSaleInvoiceNo().then((rsp) => {
      const billNo = rsp.data;
      setBillNo(billNo);
    });
  }

  function addRow(details) {
    setTableRows((prevRows) => {
      return [...prevRows, details];
    }); //Check here, how to update quantity of an item in real time
    setQuantityAndPrice({
      availableQuantity: "-",
      itemPrice: "-",
    });
    setTotalQuantityAndAmount((prevValues) => {
      return {
        totalAmount:
          parseFloat(prevValues.totalAmount) +
          parseFloat(details.quantity * details.selling_price),
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
          parseFloat(tableRows[id].quantity * tableRows[id].selling_price),
        totalQuantity:
          parseInt(prevValues.totalQuantity) - parseInt(tableRows[id].quantity),
      };
    });
  }

  return (
    <div>
      <Header />
      <VerticalNavbar />
      <RtdBar quantityAndPrice={quantityAndPrice} />
      <BillForm
        billNo={billNo}
        onAdd={addRow}
        getQuantityAndPrice={(item_code) => {
          getQuantityAndPrice(item_code);
        }}
      />
      <CustomerForm billNo={billNo} />
      <BillTable tableRows={tableRows} onDelete={deleteRow} />
      <TotalTable
        sumOfQuantity={totalQuantityAndAmount.totalQuantity}
        totalAmount={totalQuantityAndAmount.totalAmount}
      />
      <MainButton totalAmount={totalQuantityAndAmount.totalAmount} />
      <Footer />
    </div>
  );
}

export default BillingPage;
