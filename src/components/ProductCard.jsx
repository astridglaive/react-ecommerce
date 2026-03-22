import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="card h-100">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <div className="position-relative">
          <img 
            src={product.image} 
            className="card-img-top" 
            alt={product.name} 
            style={{ height: '200px', objectFit: 'cover' }}
          />
          
          <button
            className="btn position-absolute top-0 end-0 m-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            style={{ zIndex: 10 }}
          >
            <i 
              className={`fa-heart fs-4 ${inWishlist ? 'fas text-danger' : 'far text-dark'}`}
            ></i>
          </button>
          
          {product.discount && (
            <span className="badge bg-danger position-absolute top-0 start-0 m-2">
              {product.discount}% OFF
            </span>
          )}
        </div>
        
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < product.rating ? 'text-warning' : 'text-secondary'}`}
              ></i>
            ))}
            <span className="ms-2 text-muted">{product.rating}/5</span>
          </div>
          
          <div className="d-flex align-items-center mb-3">
            <span className="h5 text-danger me-2">${product.price}</span>
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <div className="card-body pt-0">
        <button className="btn btn-primary mt-auto w-100" onClick={() => addToCart(product)}>
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;