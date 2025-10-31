import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Explore</h4>
            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-section">
            <h4>Stay connected</h4>
            <div className="social-container">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">DEV@Deakin</p>
          <p className="links">
            <span>Privacy Policy</span>|
            <span>Terms</span>|
            <span>Code of Conduct</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;