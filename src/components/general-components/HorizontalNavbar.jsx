import React from 'react';

function HorizontalNavbar(props) {
    function handleClick() {
        console.log("Logout button clicked.");
    }
    return (
        <header>
<<<<<<< HEAD
            <p>Hello {props.userName}</p>
            <button onClick={handleClick} className="btn btn-danger">Logout</button>
=======
            <p>INVENTORY MANAGMENT SYSTEM</p>
            <button className="btn btn-danger">Logout</button>
>>>>>>> sandipan
        </header>
    );
}

export default HorizontalNavbar;