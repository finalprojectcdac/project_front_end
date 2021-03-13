import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import items from '../poc-components/BillItems';
import '../../styles.css';

function BillTable() {
    return (
        <div>
            <table className="table table-bordered table-sm table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="sno">S.No.</th>
                        <th scope="col" className="item-name">Item</th>
                        <th scope="col" className="qty">Quantity</th>
                        <th scope="col" className="price">Price (per Unit)</th>
                        <th scope="col" className="price">Total</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row" className="sno">{index+1}</th>
                            <td className="item-name">{item.name}</td>
                            <td className="qty">{item.quantity}</td>
                            <td className="price"><span>Rs. </span>{item.price}</td>
                            <td className="price"><span>Rs. </span>{item.price*item.quantity}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default BillTable;