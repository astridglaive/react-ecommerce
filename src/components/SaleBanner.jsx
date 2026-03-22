import React, { useState } from 'react';

const SaleBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sale-banner">
      <div className="container">
        <div className="sale-banner-content">
          <p className="sale-banner-text">
            <i className="fas fa-tag me-2"></i>
            🎉 <strong>END OF SEASON SALE!</strong> Get up to 50% OFF on all Devil Fruits! 
            Use code: <strong>GRANDPIECE50</strong> at checkout 🎉
          </p>
          <button 
            className="sale-banner-close" 
            onClick={() => setIsVisible(false)}
            aria-label="Close banner"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;