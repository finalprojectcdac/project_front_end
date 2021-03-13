import React from 'react';
import BillForm from '../components/billing-components/BillForm';
import BillTable from '../components/billing-components/BillTable';
import HorizontalNavbar from '../components/general-components/HorizontalNavbar';
import CustomerForm from '../components/billing-components/CustomerForm';
import VerticalNavbar from '../components/general-components/VerticalNavbar';

function BillingPage() {
    return(
        <div>
            <HorizontalNavbar userName="User" />
            <VerticalNavbar />
            <BillForm />
            <CustomerForm />
            <BillTable />
        </div>
    );
}

export default BillingPage;