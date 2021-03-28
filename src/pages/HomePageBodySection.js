import React from "react";
import {Button} from "./Button";
//import '../App.css';
import '../components/login-components/HomePageBodyButtons.css';

function HomePageBodySection() {
    return(
        <div className = "hero-container">
        <h1>INVENTORY AND BILLING SYSTEM</h1>
        <p> only for industry use</p>
        <div className = "hero-btns">
          <Button className = "btns" buttonStyle='btn--outline'
          buttonSize='btn--large'>REGISTER</Button>

           <Button className = "btns" buttonStyle='btn--primary'
          buttonSize='btn--large'>LOGIN <i className = 'fas fa-user-circle'></i></Button>
        </div>

        </div>
    )
}

export default HomePageBodySection