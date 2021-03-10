import React from 'react';

function RtdBar() {
    var today = new Date();
    return (
        <div className="rtdBar">
            <h6>
                {today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()}
            </h6>
        </div>
    );
}

export default RtdBar;