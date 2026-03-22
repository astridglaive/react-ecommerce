import { useState, useMemo, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/Skeleton';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

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

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }

    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        }
        return product.price >= min;
      });
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar />
        </div>

        <div className="col-lg-10 col-md-9">
          <h2 className="mb-3">All Products</h2>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="row mb-4">
            <div className="col-md-3 mb-2">
              <label className="form-label">Category</label>
              <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3 mb-2">
              <label className="form-label">Price Range</label>
              <select className="form-select" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="All">All Prices</option>
                <option value="0-1000">$0 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-5000">$2,000 - $5,000</option>
                <option value="5000-999999">$5,000+</option>
              </select>
            </div>

            <div className="col-md-3 mb-2">
              <label className="form-label">Sort By</label>
              <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="col-md-3 mb-2 d-flex align-items-end">
              <button className="btn btn-secondary w-100" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setPriceRange('All');
                setSortBy('default');
              }}>
                Reset Filters
              </button>
            </div>
          </div>

          <p className="text-muted mb-3">
            {loading ? 'Loading products...' : `Showing ${filteredProducts.length} of ${allProducts.length} products`}
          </p>

          <div className="row">
            {loading ? (
              Array(8).fill(0).map((_, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                  <ProductCardSkeleton />
                </div>
              ))
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No products found</h4>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;