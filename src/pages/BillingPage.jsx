import React, { useEffect, useState } from "react";
import BillForm from "../components/billing-components/BillForm";
import BillTable from "../components/billing-components/BillTable";
import HorizontalNavbar from "../components/general-components/HorizontalNavbar";
import CustomerForm from "../components/billing-components/CustomerForm";
import VerticalNavbar from "../components/general-components/VerticalNavbar";
import user from '../service/serviceLayer';

function BillingPage() {

  const [billNo, setBillNo] = useState("");

  useEffect(getBillNO, []);

  function getBillNO()
    {
      user.getSaleInvoiceNo().then(rsp =>{
        const billNo = rsp.data;
        setBillNo(billNo);
      });
    }

  return (
    <div>
      <HorizontalNavbar userName="User" />
      <VerticalNavbar />
      <BillForm billNo={billNo}/>
      <CustomerForm />
      <BillTable />
    </div>
  );
}

export default BillingPage;
