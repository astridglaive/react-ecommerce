import React, { useMemo } from 'react';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import ProductCard from './ProductCard';

const RecentlyViewed = () => {
  const { recentlyViewed, clearRecentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) {
    return null;
  }

  const displayedProducts = useMemo(() => {
    return recentlyViewed.slice(0, 4);
  }, [recentlyViewed]);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          <i className="fas fa-history me-2"></i>
          Recently Viewed
        </h2>
        <button 
          className="btn btn-outline-secondary"
          onClick={clearRecentlyViewed}
        >
          <i className="fas fa-trash me-2"></i>
          Clear History
        </button>
      </div>

      <div className="row">
        {displayedProducts.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <hr className="my-5" />
    </div>
  );
};

export default RecentlyViewed;