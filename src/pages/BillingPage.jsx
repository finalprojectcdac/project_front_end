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
      <BillTable tableRows={tableRows} />
      <TotalTable />
      <MainButton />
      <Footer />
    </div>
  );
}

export default BillingPage;
