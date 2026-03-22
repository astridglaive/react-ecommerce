import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: 'card'
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal > 1000 ? 0 : 150;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <i className="fas fa-shopping-cart display-1 text-muted mb-3"></i>
          <h2>Your Cart is Empty</h2>
          <p className="text-muted">Add items to your cart before checking out</p>
          <Link to="/products" className="btn btn-primary mt-3">
            <i className="fas fa-shopping-bag me-2"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <i className="fas fa-check-circle display-1 text-success mb-3 animate-pulse"></i>
          <h2 className="text-success">Order Placed Successfully!</h2>
          <p className="text-muted">Thank you for your purchase. Redirecting to home...</p>
          <div className="spinner-border text-primary mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        <i className="fas fa-credit-card me-2"></i>
        Checkout
      </h2>

      <div className="row">
        {/* Checkout Form */}
        <div className="col-lg-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Shipping Information</h4>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">ZIP Code *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">Country *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <h4 className="card-title mb-4 mt-4">Payment Method</h4>
                
                <div className="mb-4">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="card"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="card">
                      <i className="fas fa-credit-card me-2"></i>
                      Credit/Debit Card
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="paypal"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      <i className="fab fa-paypal me-2"></i>
                      PayPal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="cod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="cod">
                      <i className="fas fa-money-bill-wave me-2"></i>
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="fas fa-check-circle me-2"></i>
                    Place Order - ${total}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
            <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>
              
              <div className="cart-items mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {cart.map((item) => (
                  <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div className="ms-3 flex-grow-1">
                      <h6 className="mb-0" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                      <small className="text-muted">Qty: {item.qty}</small>
                    </div>
                    <div className="text-end">
                      <span className="text-danger fw-bold">${item.price * item.qty}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal:</span>
                  <span className="fw-bold">${subtotal}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Shipping:</span>
                  <span className="fw-bold">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <small className="text-success">
                    <i className="fas fa-gift me-1"></i>
                    Free shipping on orders over $1,000
                  </small>
                )}
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span className="h5 mb-0">Total:</span>
                  <span className="h5 text-danger mb-0">${total}</span>
                </div>
              </div>

              <div className="alert alert-info mb-0">
                <i className="fas fa-shield-alt me-2"></i>
                <small>Secure checkout guaranteed</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;