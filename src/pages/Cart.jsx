import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CartItemSkeleton } from '../components/Skeleton';

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal > 1000 ? 0 : 150;
  const total = subtotal + shipping;

  if (loading) {
    return (
      <div className="container py-5">
        <h2 className="mb-4">Shopping Cart</h2>
        <div className="row">
          <div className="col-lg-8">
            {Array(3).fill(0).map((_, index) => (
              <CartItemSkeleton key={index} />
            ))}
          </div>
          <div className="col-lg-4">
            <div className="skeleton-summary">
              <div className="skeleton-title"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
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

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        <i className="fas fa-shopping-cart me-2"></i>
        Shopping Cart ({cart.length} items)
      </h2>

      <div className="row">
        <div className="col-lg-8 mb-4">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded"
                      style={{ maxHeight: '100px' }}
                    />
                  </div>
                  <div className="col-md-4">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="text-muted mb-0">Category: {item.category}</p>
                  </div>
                  <div className="col-md-2">
                    <h5 className="text-danger mb-0">${item.price}</h5>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => decreaseQty(item.id)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="mx-3 fw-bold">{item.qty}</span>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-end">
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button 
            className="btn btn-outline-secondary"
            onClick={clearCart}
          >
            <i className="fas fa-trash me-2"></i>
            Clear Cart
          </button>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
            <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>
              
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal:</span>
                <span className="fw-bold">${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Shipping:</span>
                <span className="fw-bold">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
              </div>
              {shipping === 0 && (
                <small className="text-success d-block mb-2">
                  <i className="fas fa-gift me-1"></i>
                  Free shipping on orders over $1,000
                </small>
              )}
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span className="h5 mb-0">Total:</span>
                <span className="h5 text-danger mb-0">${total}</span>
              </div>

              <Link to="/checkout" className="btn btn-primary w-100 btn-lg">
                <i className="fas fa-credit-card me-2"></i>
                Proceed to Checkout
              </Link>

              <Link to="/products" className="btn btn-outline-secondary w-100 mt-2">
                <i className="fas fa-shopping-bag me-2"></i>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;