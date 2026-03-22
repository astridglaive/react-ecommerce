import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.png';
import product4 from '../assets/images/product4.png';
import product5 from '../assets/images/product5.png';
import product6 from '../assets/images/product6.png';
import product7 from '../assets/images/product7.png';
import product8 from '../assets/images/product8.png';
import product9 from '../assets/images/product9.png';
import product10 from '../assets/images/product10.png';
import product11 from '../assets/images/product11.png';
import product12 from '../assets/images/product12.png';
import product13 from '../assets/images/product13.png';
import product14 from '../assets/images/product14.png';

const allProducts = [
  { id: 1, name: "Mochi Mochi no Mi", category: "Paramecia", oldPrice: 2500, price: 1899, discount: 24, rating: 5, image: product1, description: "Allows the user to create and control mochi." },
  { id: 2, name: "Doku Doku no Mi", category: "Paramecia", oldPrice: 1500, price: 999, discount: 33, rating: 4, image: product2, description: "Grants the ability to create and control poison." },
  { id: 3, name: "Ryu Ryu no Mi Model: Pteranodon", category: "Zoan", oldPrice: 7000, price: 4999, discount: 29, rating: 5, image: product3, description: "Allows transformation into a pteranodon hybrid." },
  { id: 4, name: "Gura Gura no Mi", category: "Paramecia", oldPrice: 3000, price: 2499, discount: 17, rating: 5, image: product4, description: "Grants the power to create earthquakes and tsunamis." },
  { id: 5, name: "Mera Mera no Mi", category: "Logia", oldPrice: 1800, price: 1299, discount: 28, rating: 4, image: product5, description: "Allows the user to create and control fire." },
  { id: 6, name: "Pika Pika no Mi", category: "Logia", oldPrice: 2800, price: 2199, discount: 21, rating: 5, image: product6, description: "Grants the power of light and lasers." },
  { id: 7, name: "Ope Ope no Mi", category: "Paramecia", oldPrice: 5000, price: 3999, discount: 20, rating: 5, image: product7, description: "Allows the user to create a spherical operating room." },
  { id: 8, name: "Hito Hito no Mi Model: Dragon", category: "Zoan", oldPrice: 6500, price: 4799, discount: 26, rating: 5, image: product8, description: "Allows transformation into a mythical dragon." },
  { id: 9, name: "Soru Soru no Mi", category: "Paramecia", oldPrice: 4500, price: 3299, discount: 27, rating: 4, image: product9, description: "Grants the ability to manipulate souls." },
  { id: 10, name: "Magu Magu no Mi", category: "Logia", oldPrice: 3500, price: 2799, discount: 20, rating: 5, image: product10, description: "Allows the user to create and control magma." },
  { id: 11, name: "Tori Tori no Mi Model: Phoenix", category: "Zoan", oldPrice: 5500, price: 4199, discount: 24, rating: 5, image: product11, description: "Allows transformation into a phoenix with healing abilities." },
  { id: 12, name: "Moku Moku no Mi", category: "Logia", oldPrice: 2200, price: 1699, discount: 23, rating: 4, image: product12, description: "Grants the power to create and control smoke." },
  { id: 13, name: "Yami Yami no Mi", category: "Logia", oldPrice: 4000, price: 2999, discount: 25, rating: 5, image: product13, description: "Allows the user to create and control darkness." },
  { id: 14, name: "Ito Ito no Mi", category: "Paramecia", oldPrice: 1900, price: 1399, discount: 26, rating: 4, image: product14, description: "Grants the ability to create and control strings." }
];

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addViewedProduct } = useRecentlyViewed();
  
  const product = allProducts.find(p => p.id === parseInt(id));
  const inWishlist = isInWishlist(product?.id);

  // Track view ONLY once when product ID changes
  useEffect(() => {
    if (product) {
      addViewedProduct(product);
    }
  }, [product?.id, addViewedProduct]);

  if (!product) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Product not found</h2>
          <Link to="/products" className="btn btn-primary mt-3">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="img-fluid rounded"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{product.name}</h1>
          <p className="text-muted">Category: {product.category}</p>
          
          <div className="mb-3">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < product.rating ? 'text-warning' : 'text-secondary'}`}
              ></i>
            ))}
            <span className="ms-2">({product.rating}/5)</span>
          </div>

          <p className="lead">{product.description}</p>

          <div className="d-flex align-items-center mb-4">
            <span className="h3 text-danger me-3">${product.price}</span>
            {product.oldPrice && (
              <span className="h5 text-muted text-decoration-line-through">
                ${product.oldPrice}
              </span>
            )}
            {product.discount && (
              <span className="badge bg-danger ms-2">{product.discount}% OFF</span>
            )}
          </div>

          <div className="d-grid gap-2 d-md-flex">
            <button 
              className="btn btn-primary btn-lg flex-fill"
              onClick={() => addToCart(product)}
            >
              <i className="fas fa-shopping-cart me-2"></i>
              Add to Cart
            </button>
            <button 
              className="btn btn-outline-danger btn-lg"
              onClick={() => toggleWishlist(product)}
            >
              <i className={`${inWishlist ? 'fas' : 'far'} fa-heart me-2`}></i>
              {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;