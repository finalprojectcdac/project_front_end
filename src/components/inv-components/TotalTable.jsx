import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function TotalTable() {
    return(
        <div className="total-table" style={{top:"1090px"}}>
            <ReactBootStrap.Table striped bordered className="table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
            </ReactBootStrap.Table>
      </div>
    )
}

export default TotalTable;