import React, { useEffect, useState } from 'react';
import HorizontalNavbar from '../components/general-components/HorizontalNavbar';
import VerticalNavbar from '../components/general-components/VerticalNavbar';
import RtdBar from '../components/inv-components/RtdBar';
import SupplierForm, {supplierobj} from '../components/inv-components/SupplierForm';
import user from '../service/serviceLayer';
<<<<<<< HEAD
import InvForm from "../components/inv-components/inv-form2";
import MainButtons from "../components/inv-components/MainButtons";
=======
import InvForm, {inventoryDetails} from "../components/inv-components/inv-form2"
import MainButton from '../components/inv-components/MainButton';

>>>>>>> vaibhav
function InventoryPage() {

    const [rtd, setRtd] = useState({
        totalNoOfItems:"",
        totalItemValue: ""
    });

    useEffect(getRealTimeData,[])

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
<<<<<<< HEAD
             <VerticalNavbar />
             <RtdBar clickFunction={getRealTimeData} totalNoOfItems={rtd.totalNoOfItems} totalItemValue={rtd.totalItemValue}/>
             <InvForm />
             <Supplier_from />
             <MainButtons/>
             
             
=======
            <VerticalNavbar />
            <RtdBar clickFunction={getRealTimeData} totalNoOfItems={rtd.totalNoOfItems} totalItemValue={rtd.totalItemValue} />
            <InvForm />
            <SupplierForm />
            <MainButton inventoryDetails={inventoryDetails} supplierobj={supplierobj}/>
>>>>>>> vaibhav
        </div>
    )
}

export default InventoryPage;