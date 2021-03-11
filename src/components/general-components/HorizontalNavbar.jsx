import React from 'react';

function HorizontalNavbar(props) {
    function handleClick() {
        console.log("Logout button clicked.");
    }
    return (
        <header>
            <p>Hello {props.userName}</p>
            <button onClick={handleClick} className="btn btn-danger">Logout</button>
        </header>
    );
}

export default HorizontalNavbar;