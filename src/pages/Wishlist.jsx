import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCardSkeleton } from '../components/Skeleton';

const Wishlist = () => {
  const { addToCart } = useContext(CartContext);
  const { wishlist, removeFromWishlist } = useWishlist();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <h2 className="mb-4">
          <i className="fas fa-heart text-danger me-2"></i>
          My Wishlist
        </h2>
        <div className="row">
          {Array(4).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <i className="far fa-heart display-1 text-muted mb-3"></i>
          <h2>Your Wishlist is Empty</h2>
          <p className="text-muted">Add items to your wishlist to see them here</p>
          <Link to="/products" className="btn btn-primary mt-3">
            <i className="fas fa-shopping-bag me-2"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const total = wishlist.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        <i className="fas fa-heart text-danger me-2"></i>
        My Wishlist ({wishlist.length} items)
      </h2>

      <div className="row">
        {wishlist.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100">
              <div className="position-relative">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <button
                  className="btn position-absolute top-0 end-0 m-2"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <i className="fas fa-times text-danger fs-5"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex align-items-center mb-3">
                  <span className="h5 text-danger me-2">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-muted text-decoration-line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="d-grid gap-2">
                  <button 
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                  </button>
                  <button 
                    className="btn btn-outline-danger"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-light rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Total ({wishlist.length} items):</h4>
          <h3 className="text-danger">${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;