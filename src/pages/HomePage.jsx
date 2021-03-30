import React ,{useState} from "react";
import HorizontalNavbar from "../components/general-components/HorizontalNavbar";
import {Link} from "react-router-dom";
import "../home.css";
import { Button } from "./Button";
import Footer from "../components/login-components/Footer";



function HomePage() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };
  
  window.addEventListener('resize',showButton)

  
  
  return (
    <div className="homepage">
{/* Home page Navbar starts here */}
      <nav className ="navbar">
        <div className ="navbar-container">
          <Link to = "/" className = "navbar-logo">
            IBS <i className='fab fa-typo3'></i>
          </Link>
          <div className = "menu-icon" onClick = {handleClick}>
            <i className = {click? 'fas fa-times' : 'fas fa-bars' }></i>
          </div>
          <ul className = {click? 'nav-menu active' : 'nav-menu'}>
            <li className = "nav-item">
              <Link to = "/" className ="nav-links" onClick ={closeMobileMenu}>
                Blog
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>ABOUT US</Button>}
        </div>
      </nav>
      {/* Home page body starts here */}
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

        {/* Home page footer starts here */}

        <Footer />
       
      

    </div>
  );
}

export default HomePage;
