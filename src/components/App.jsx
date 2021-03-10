import React from 'react';
import ReactDOM from 'react-dom';


// import Form  from "../components/Form"
// import Table  from "../components/Table"

import Inv_form from "./inv-from"
import Supplier_form from "./supplier-form"
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from './VerticalNavbar';
import RtdBar from './RtdBar';
import TestForm from './TestForm';
import Table from './Table';
import '../styles.css';





    // return (<div>
    //     <Form />
    //     <Table />

     function App() {
        return (<div>
            <TestForm />
            {/* <HorizontalNavbar />
            <VerticalNavbar />
            <RtdBar />
            <Inv_form />
             <Supplier_form /> */}

    </div>);
}

export default App;
