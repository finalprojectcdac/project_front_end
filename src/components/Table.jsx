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