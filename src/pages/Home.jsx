import React, { useState, useEffect } from 'react';  
import ProductCard from '../components/ProductCard';
import RecentlyViewed from '../components/RecentlyViewed';
import { ProductCardSkeleton } from '../components/Skeleton';

import banner1 from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';

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

const products = [
  { id: 1, name: "Mochi Mochi no Mi", category: "Paramecia", oldPrice: 2500, price: 1899, discount: 24, rating: 5, image: product1 },
  { id: 2, name: "Doku Doku no Mi", category: "Paramecia", oldPrice: 1500, price: 999, discount: 33, rating: 4, image: product2 },
  { id: 3, name: "Ryu Ryu no Mi Model: Pteranodon", category: "Zoan", oldPrice: 7000, price: 4999, discount: 29, rating: 5, image: product3 },
  { id: 4, name: "Gura Gura no Mi", category: "Paramecia", oldPrice: 3000, price: 2499, discount: 17, rating: 5, image: product4 },
  { id: 5, name: "Mera Mera no Mi", category: "Logia", oldPrice: 1800, price: 1299, discount: 28, rating: 4, image: product5 },
  { id: 6, name: "Pika Pika no Mi", category: "Logia", oldPrice: 2800, price: 2199, discount: 21, rating: 5, image: product6 },
  { id: 7, name: "Ope Ope no Mi", category: "Paramecia", oldPrice: 5000, price: 3999, discount: 20, rating: 5, image: product7 },
  { id: 8, name: "Hito Hito no Mi Model: Dragon", category: "Zoan", oldPrice: 6500, price: 4799, discount: 26, rating: 5, image: product8 },
  { id: 9, name: "Soru Soru no Mi", category: "Paramecia", oldPrice: 4500, price: 3299, discount: 27, rating: 4, image: product9 },
  { id: 10, name: "Magu Magu no Mi", category: "Logia", oldPrice: 3500, price: 2799, discount: 20, rating: 5, image: product10 },
  { id: 11, name: "Tori Tori no Mi Model: Phoenix", category: "Zoan", oldPrice: 5500, price: 4199, discount: 24, rating: 5, image: product11 },
  { id: 12, name: "Moku Moku no Mi", category: "Logia", oldPrice: 2200, price: 1699, discount: 23, rating: 4, image: product12 },
  { id: 13, name: "Yami Yami no Mi", category: "Logia", oldPrice: 4000, price: 2999, discount: 25, rating: 5, image: product13 },
  { id: 14, name: "Ito Ito no Mi", category: "Paramecia", oldPrice: 1900, price: 1399, discount: 26, rating: 4, image: product14 }
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="container-fluid mb-4">
        {loading ? (
          <div className="skeleton-image" style={{ height: '400px', borderRadius: '12px' }}></div>
        ) : (
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={banner1} alt="First slide" style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="text-white">Summer Sale!</h2>
                  <p className="text-white">Up to 50% off on Devil Fruits</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={banner2} alt="Second slide" style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="text-white">New Arrivals</h2>
                  <p className="text-white">Latest Logia fruits just landed</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={banner3} alt="Third slide" style={{ height: '400px', objectFit: 'cover' }} />
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
        )}
      </div>

      <h2 className="mb-3">Featured Products</h2>

      <div className="row">
        {loading ? (
          Array(8).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <ProductCardSkeleton />
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