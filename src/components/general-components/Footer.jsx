import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div class="social-media-wrap">
        <div class="footer-logo social-logo">
          IBS
          <i class="fab fa-typo3" />
        </div>
        <small class="website-rights">IBS © 2021</small>
        <div class="social-icons">
        {/* <div class="footer-logo social-logo"> */}
        <small class="website-rights">Developers</small>
        {/* </div> */}
          <div class="social-icon-link ">
          <a href="https://www.linkedin.com/in/maheshwari-modala-0bb05517b" style={{textDecoration:"none",color:"inherit"}}><i class="fab fa-linkedin"></i></a> 
          </div>
          <div class="social-icon-link ">
          <a href="https://www.linkedin.com/in/shubham-sharma-a8476a191" style={{textDecoration:"none",color:"inherit"}}><i class="fab fa-linkedin"></i></a> 
          </div>
          <div class="social-icon-link ">
          <a href="https://www.linkedin.com/in/sagar-sahu-612a0a165" style={{textDecoration:"none",color:"inherit"}}><i class="fab fa-linkedin"></i></a> 
          </div>
          <div class="social-icon-link ">
          <a href="https://www.linkedin.com/in/chauhanvaibhav095" style={{textDecoration:"none",color:"inherit"}}><i class="fab fa-linkedin"></i></a> 
          </div>
          <div class="social-icon-link ">
          <a href="https://www.linkedin.com/in/sandipan-bera-61a9a4184" style={{textDecoration:"none",color:"inherit"}}><i class="fab fa-linkedin"></i></a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
