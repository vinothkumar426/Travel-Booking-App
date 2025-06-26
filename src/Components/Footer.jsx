import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>GoTrip</h3>
          <p>Explore the world with GoTrip. Your journey begins here with unforgettable experiences and affordable packages.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@gotrip.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GoTrip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
