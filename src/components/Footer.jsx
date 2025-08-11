import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="links-column">
          <h4>About Us</h4>
          <a href="#">Our Company</a>
          <a href="#">Our Coffee</a>
          <a href="#">Stories and News</a>
        </div>
        <div className="links-column">
          <h4>Careers</h4>
          <a href="#">Culture and Values</a>
          <a href="#">Inclusion, Diversity, and Equity</a>
          <a href="#">College Achievement Plan</a>
        </div>
        <div className="links-column">
          <h4>Social Impact</h4>
          <a href="#">People</a>
          <a href="#">Planet</a>
          <a href="#">Environmental and Social Impact Reporting</a>
        </div>
      </div>
      <div className="footer-legal">
        <p>© 2025 Starbucks Coffee Company. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Notice</a>
          <a href="#">Terms of Use</a>
          <a href="#">CA Supply Chain Act</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;