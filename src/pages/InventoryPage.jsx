import React, { useState } from 'react';
import HorizontalNavbar from '../components/general-components/HorizontalNavbar';
import VerticalNavbar from '../components/general-components/VerticalNavbar';
import RtdBar from '../components/inv-components/RtdBar';
import Supplier_from from '../components/inv-components/supplier-form';
import user from '../service/serviceLayer';
import InvForm from "../components/inv-components/inv-form2"
function InventoryPage() {

    const [rtd, setRtd] = useState({
        totalNoOfItems:"",
        totalItemValue: ""
    });

    function getRealTimeData() {
        user.getRealTimeData().then(resp => {
            const {totalNoOfItems, totalItemValue} = resp.data.rtd;
            setRtd({
                totalNoOfItems: totalNoOfItems,
                totalItemValue: totalItemValue
            })
        })
    }

    return (
        <div>
            <HorizontalNavbar userName="User" />
             <VerticalNavbar />
             <RtdBar clickFunction={getRealTimeData} totalNoOfItems={rtd.totalNoOfItems} totalItemValue={rtd.totalItemValue}/>
             <InvForm />
             <Supplier_from />
             
        </div>
    )
}

export default InventoryPage;