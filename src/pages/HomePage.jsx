import React ,{useState} from "react";
import HorizontalNavbar from "../components/general-components/HorizontalNavbar";
import {Link} from "react-router-dom";
import "../home.css";
import { Button } from "./Button";
import HomePageBodySection from "./HomePageBodySection";


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
      {/* <style>{'body { background-color: green; }'}</style> */}

      {/* <div>
        <div className="heading">
          <h1 className="h1">Inventory</h1>
        </div>
        <img id="img" src="images/logo.jpg"></img>
        

        <div className="container">
          <div className="center"></div>
          <ul>
            <li>
              <a href="">LOGIN</a>
            </li>
            <li>
              <a href="">REGISTER</a>
            </li>
          </ul>
        </div>
      </div> */}

      <nav className ="navbar">
        <div className ="navbar-container">
          <Link to = "/" className = "navbar-logo">
            IBM <i className='fab fa-typo3'></i>
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
      <HomePageBodySection />

    </div>
  );
}

export default HomePage;
