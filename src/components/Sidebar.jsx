import React, { useState, useEffect } from 'react';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('');


  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange('');
    setSortBy('');
  };

  return (
    <div className="sidebar">
      <h4 className="mb-3">Filters</h4>

      {/* Search */}
      <div className="mb-3">
        <label className="form-label">Search Products</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select 
          className="form-select" 
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-3">
        <label className="form-label">Price Range</label>
        <select 
          className="form-select"
          value={priceRange}
          onChange={handlePriceChange}
        >
          <option value="">All Prices</option>
          <option value="0-1000">$0 - $1,000</option>
          <option value="1000-2000">$1,000 - $2,000</option>
          <option value="2000-5000">$2,000 - $5,000</option>
          <option value="5000+">$5,000+</option>
        </select>
      </div>

      {/* Sort By */}
      <div className="mb-3">
        <label className="form-label">Sort By</label>
        <select 
          className="form-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      <button 
        className="btn btn-secondary w-100" 
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Sidebar;