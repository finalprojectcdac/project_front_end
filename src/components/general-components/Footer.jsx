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
          <div class="social-icon-link ">
            <i class="fab fa-facebook-f" />
          </div>
          <div class="social-icon-link ">
            <i class="fab fa-instagram" />
          </div>
          <div class="social-icon-link ">
            <i class="fab fa-youtube" />
          </div>
          <div class="social-icon-link ">
            <i class="fab fa-twitter" />
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
