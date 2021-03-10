
import React,{useState} from 'react';
import * as ReactBootstarp from "react-bootstrap";
import {a} from "./Form";

function Table(){
    var istrue=false;

    const renderArry = (a,index) => {
        return (
            <tr key={index}>
            <td>{a.name}</td>
            <td>{a.mobile}</td>
            <td>{a.city}</td>

            </tr>
        )

    }
  
   function handleclick(event){
     if(a.length() === 0){
         istrue=false;
     } else{
         istrue=true;
     }
   }



    return (
        <div>
            <button type="submit" onClick={handleclick}>view</button>
     <ReactBootstarp.Table>
        <thead>
          <tr>
            
            <th>name</th>
            <th>mobile</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
         { istrue ? a.map(renderArry):null }
        </tbody>
        </ReactBootstarp.Table>
      </div>
    )
}



import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {a} from './TestForm';

function Table() {

    const renderArray = (a,index) => {
    return (
        <tr>
            <th>{a.name}</th>
            <th>{a.mobile}</th>
            <th>{a.city}</th>
        </tr>
    );
}

    return (
        <div>
            <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {a.map(renderArray)}
        </tbody>
      </ReactBootStrap.Table>
        </div>
    );
}


export default Table;