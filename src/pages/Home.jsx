import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import RecentlyViewed from '../components/RecentlyViewed';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 8));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="container-fluid mb-4">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/banner1.png" alt="First slide" style={{ height: '400px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="text-white">Summer Sale!</h2>
                <p className="text-white">Up to 50% off on Devil Fruits</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/banner2.png" alt="Second slide" style={{ height: '400px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="text-white">New Arrivals</h2>
                <p className="text-white">Latest Logia fruits just landed</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/banner3.png" alt="Third slide" style={{ height: '400px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="text-white">Free Shipping</h2>
                <p className="text-white">On all orders over $1,000</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h2 className="mb-3">Featured Products</h2>

      <div className="row">
        {loading ? (
          Array(8).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="skeleton-image" style={{ height: '200px' }}></div>
                <div className="card-body">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-text" style={{ width: '60%' }}></div>
                  <div className="skeleton-button"></div>
                </div>
              </div>
            </div>
          ))
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