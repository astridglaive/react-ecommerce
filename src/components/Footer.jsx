import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row gy-4">
          
          {/* Store Description */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-brand mb-3">
              <i className="fas fa-gem me-2"></i>
              Grand Piece Store
            </h5>
            <p className="footer-description">
              Your ultimate destination for premium Devil Fruits from the Grand Line. 
              We offer the rarest and most powerful fruits to help you unlock your true 
              potential. Quality guaranteed, worldwide shipping available.
            </p>
            <div className="social-icons mt-3">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/policies">Policies</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Customer Service</h5>
            <ul className="footer-links">
              <li><Link to="/cart">Shopping Cart</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/policies">Shipping Info</Link></li>
              <li><Link to="/policies">Returns</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  123 Grand Line Avenue<br />
                  Paradise Island, GL 12345<br />
                  One Piece World
                </span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>support@grandpiecestore.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Mon - Fri: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods mt-4 pt-4 border-top border-secondary">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0 text-muted">
                <i className="fas fa-shield-alt me-2"></i>
                Secure Payments Guaranteed
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <i className="fab fa-cc-visa fa-2x me-2 text-muted"></i>
              <i className="fab fa-cc-mastercard fa-2x me-2 text-muted"></i>
              <i className="fab fa-cc-paypal fa-2x me-2 text-muted"></i>
              <i className="fab fa-cc-stripe fa-2x text-muted"></i>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-4 pt-3 border-top border-secondary">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">
                &copy; {currentYear} Grand Piece Store. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link to="/policies" className="footer-link me-3">Privacy Policy</Link>
              <Link to="/policies" className="footer-link me-3">Terms of Service</Link>
              <Link to="/policies" className="footer-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;