import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import API_URL from '../config/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    if (priceRange) {
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
  }, [products, searchTerm, selectedCategory, priceRange, sortBy]);

  if (loading) {
    return <div className="container py-5"><h2>Loading products...</h2></div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-4">
          <Sidebar />
        </div>

        <div className="col-lg-9 col-md-8">
          <h2 className="mb-4">All Products</h2>
          
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
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