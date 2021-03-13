import React from 'react';
import {Link} from 'react-router-dom';

function VerticalNavbar() {
    return (
        <div className="verticalNavbar">
            <ul>
            <Link to="/inventory" style={{textDecoration:"none"}}><li className="text-color"><a>Inventory</a></li></Link>
            <Link to="/billing" style={{textDecoration:"none"}}><li className="text-color"><a>Billing</a></li></Link>
            <li className="text-color"><a>Monitoring</a></li>
            </ul>
        </div>
    );
}

export default VerticalNavbar;