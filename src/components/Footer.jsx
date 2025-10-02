import "./Footer.css";
import logo from "../assets/logo-hanubridge.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import youtubeIcon from "../assets/youtube.png";
import location from "../assets/google-maps.png";
import phone from "../assets/telephone.png";
import email from "../assets/mail.png";
import React from "react";

function Footer() {
  return (
  <footer
      className="container-fluid pt-4 px-4"
      style={{ backgroundColor: "#fbf9f6ff" }}
    >
      <div className="row text-center text-md-start">
        {/* Logo & About */}
        <div className="col-md-4 mb-4">
          <img
            src={logo}
            alt="Hanubridge Logo"
            className="mb-3 footer-logo"
            style={{ width: "180px" }}
          />
          <p className="text-muted" style={{ fontFamily: "serif" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Facilis repellat esse vitae ut! Rerum, quo ipsum.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-2">
          <h5 className="fs-4">Quick Links</h5>
          <ul className="list-unstyled footer-links py-2">
            <li>
              <a href="#" className="fw-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="fw-semibold">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="fw-semibold">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="fw-semibold">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="fw-semibold">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="col-md-3">
          <h5 className="fs-5">Address</h5>
          <p className="text-muted small mb-2 d-flex align-items-center fw-semibold">
            <img src={location} alt="Location" className="contact-icon me-2" />
            123, Main Street, City, Country
          </p>
          <p className="text-muted small mb-2 d-flex align-items-center fw-semibold">
            <img src={phone} alt="Phone" className="contact-icon me-2 " />
            +1 234 567 890
          </p>
          <p className="text-muted small d-flex align-items-center fw-semibold">
            <img src={email} alt="Email" className="contact-icon me-2" />
            info@hanubridge.com
          </p>
        </div>

        {/* Policies */}
        <div className="col-md-3 mb-4">
          <h5 className="fs-5" style={{ color: "#70c515" }}>
            Policies
          </h5>
          <ul className="list-unstyled">
            <li>
              <a href="policy_terms_of_use.html">Terms of Use</a>
            </li>
            <li>
              <a href="policy_privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="policy_hippa.html">HIPAA Notice</a>
            </li>
            <li>
              <a href="policy_legal_notice.html">Legal Notice</a>
            </li>
            <li>
              <a href="policy_non_discrimination.html">Non-Discrimination Notice</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        <p className="mb-2 mb-md-0 text-muted small" style={{ fontFamily: "serif" }}>
          © Hanubridge. All Rights Reserved. Developed By Sadhana Cybertek Pvt. Ltd.
        </p>

        {/* Social Icons */}
        <div className="footer-social">
          <div className="d-flex justify-content-center justify-content-md-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
