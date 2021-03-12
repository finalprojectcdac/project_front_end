import React from 'react';
import {Link} from 'react-router-dom';

function LogoutPage() {
    return(
        <div>
            <h1>Logged out successfully!</h1>
            <Link to="/"><u>Click here to login again</u></Link>
        </div>
    );
}

export default LogoutPage;