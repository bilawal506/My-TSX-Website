import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logo.png" alt="Your Company Logo" />
          </div>
          <div className="footer-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">FAQs</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-info">
            <p>&copy; 2023 <i>Nexova</i></p>
            <p>Contact: Nexova@gmail.com</p>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>    
          </div>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe to our newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" style={{color:"black"}}/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
