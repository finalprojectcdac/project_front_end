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
        <small class="website-rights">Developer</small>
        {/* </div> */}
          <div class="social-icon-link ">
          <a href="https://www.google.com" style={{textDecoration:"none",color:"inherit"}}><i class="fab fa-linkedin"></i></a> 
          </div>
          <div class="social-icon-link ">
            <i class="fab fa-linkedin" />
          </div>
          <div class="social-icon-link ">
            <i class="fab fa-linkedin" />
          </div>
          <div class="social-icon-link ">
            <i class="fab fa-linkedin" />
          </div>
          <div class="social-icon-link ">
            <i class="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
