import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import RecentlyViewed from '../components/RecentlyViewed';
import API_URL from '../config/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 8)); // Show first 8 products
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="container-fluid mb-4">
        <div className="p-5 bg-primary text-white rounded">
          <h1>Welcome to Grand Piece Store</h1>
          <p>Find the best Devil Fruits for your adventure!</p>
        </div>
      </div>

      <h2 className="mb-3">Featured Products</h2>

      <div className="row">
        {loading ? (
          <div className="col-12 text-center py-5">
            <h3>Loading products...</h3>
          </div>
        ) : (
          products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>

      <RecentlyViewed />
    </div>
  );
};

export default Home;