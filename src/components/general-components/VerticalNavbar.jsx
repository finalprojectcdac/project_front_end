import React from 'react';
import {Link} from 'react-router-dom';

function VerticalNavbar() {
    return (
        <div className="verticalNavbar">
            <ul>
            <Link to="/inventory" style={{textDecoration:"none"}}><li className="text-color" style={{width:"180px"}}><a>Inventory</a></li></Link>
            <Link to="/billing" style={{textDecoration:"none"}}><li className="text-color" style={{width:"180px"}}><a>Billing</a></li></Link>
            <li className="text-color" style={{width:"180px"}}><a>Monitoring</a></li>
            </ul>
        </div>
    );
}

export default VerticalNavbar;