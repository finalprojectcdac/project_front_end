import React from 'react';

function VerticalNavbar() {
    return (
        <div className="verticalNavbar">
            <ul>
                <li className="text-color"><a>Inventory</a></li>
                <li className="text-color"><a>Billing</a></li>
                <li className="text-color"><a>Monitoring</a></li>
            </ul>
        </div>
    );
}

export default VerticalNavbar;