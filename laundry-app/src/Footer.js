import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SPARK CLEAN</h3>
            <p className="footer-description">
              Professional cleaning and laundry services at your doorstep.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-info">📧 Email: info@sparkclean.com</p>
            <p className="footer-info">📞 Phone: +1 (555) 123-4567</p>
            <p className="footer-info">📍 Location: 123 Clean Street, City, State 12345</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="/#services" className="footer-link">Services</a>
            <a href="/#book" className="footer-link">Book Service</a>
            <a href="/user" className="footer-link">My Bookings</a>
            <a href="/admin" className="footer-link">Admin</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Spark Clean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

