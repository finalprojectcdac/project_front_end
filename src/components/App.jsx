import React from 'react';
import ReactDOM from 'react-dom';


// import Form  from "../components/Form"
// import Table  from "../components/Table"

import Inv_form from "./inv-components/inv-from"
import Supplier_form from "./inv-components/supplier-form"
import HorizontalNavbar from "./general-components/HorizontalNavbar";
import VerticalNavbar from './general-components/VerticalNavbar';
import RtdBar from './inv-components/RtdBar';
import TestForm from './poc-components/TestForm';
import Table from './poc-components/Table';
import '../styles.css';





    // return (<div>
    //     <Form />
    //     <Table />

     function App() {
        return (<div>
            {/* <TestForm /> */}
            <HorizontalNavbar />
            <VerticalNavbar />
            <RtdBar />
            <Inv_form />
             <Supplier_form />

    </div>);
}

export default App;
