import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';  

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useWishlist();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist.length;

  return (
    <>
      {/* ============== DESKTOP NAVBAR ============== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block shadow-sm">
        <div className="container">
          {/* Logo Image */}
          <Link className="navbar-brand" to="/">
            <img 
              src={logo} 
              alt="Grand Piece Store" 
              className="navbar-logo"
              style={{ height: '60px', width: 'auto' }}
            />
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/policies">Policies</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto align-items-center">
              {/* Wishlist */}
              <li className="nav-item me-3">
                <Link className="nav-link position-relative" to="/wishlist">
                  <i className="fa fa-heart me-2"></i>
                  Wishlist
                  {wishlistCount > 0 && (
                    <span className="badge bg-danger ms-2 rounded-pill">{wishlistCount}</span>
                  )}
                </Link>
              </li>

              {/* Cart */}
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-primary px-3 rounded-pill" to="/cart">
                  <i className="fa fa-shopping-cart me-2"></i>Cart
                  <span className="badge bg-danger ms-2 rounded-pill">{cartCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ============== MOBILE BOTTOM NAVIGATION ============== */}
      <nav className="navbar fixed-bottom bg-light border-top shadow-lg d-lg-none">
        <div className="container-fluid d-flex justify-content-around">
          
          <NavLink to="/" end className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? 'text-primary' : 'text-dark'}`
          }>
            <i className="fa fa-home fs-5"></i>
            <div style={{ fontSize: '11px' }}>Home</div>
          </NavLink>

          <NavLink to="/products" className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? 'text-primary' : 'text-dark'}`
          }>
            <i className="fa fa-box fs-5"></i>
            <div style={{ fontSize: '11px' }}>Products</div>
          </NavLink>

          <NavLink to="/wishlist" className={({ isActive }) =>
            `text-decoration-none text-center position-relative ${isActive ? 'text-primary' : 'text-dark'}`
          }>
            <div className="position-relative">
              <i className="fa fa-heart fs-5"></i>
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px', minWidth: '18px', height: '18px' }}>
                  {wishlistCount}
                </span>
              )}
            </div>
            <div style={{ fontSize: '11px' }}>Wishlist</div>
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) =>
            `text-decoration-none text-center position-relative ${isActive ? 'text-primary' : 'text-dark'}`
          }>
            <div className="position-relative">
              <i className="fa fa-shopping-cart fs-5"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px', minWidth: '18px', height: '18px' }}>
                  {cartCount}
                </span>
              )}
            </div>
            <div style={{ fontSize: '11px' }}>Cart</div>
          </NavLink>

        </div>
      </nav>
    </>
  );
};

export default Navbar;