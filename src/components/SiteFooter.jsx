import React from "react";
import Icon from "./Icon.jsx";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand--footer" href="#home" aria-label="CodeNeeti home">
              <span className="brand-mark" aria-hidden="true">C</span>
              <span className="brand-name">Code<span>Neeti</span></span>
            </a>
            <p>Building digital futures with good people, thoughtful technology and a little bit of heart.</p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <a href="#services">What we do</a>
            <a href="#approach">Our approach</a>
            <a href="#about">About us</a>
          </div>
          <div className="footer-links footer-contact">
            <h2>Say hello</h2>
            <a href="mailto:info@codeneeti.in">info@codeneeti.in</a>
            <a href="tel:+919661542794">+91 96615 42794</a>
            <span>Rajapur Pull, Patna, Bihar</span>
          </div>
          <a className="footer-top-link" href="#home" aria-label="Back to top">
            <Icon name="arrow" size={19} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CodeNeeti. All rights reserved.</span>
          <span>Made with care in India <b aria-hidden="true">♥</b></span>
        </div>
      </div>
    </footer>
  );
}
