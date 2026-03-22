import React from 'react';

// Product Card Skeleton
export const ProductCardSkeleton = () => {
  return (
    <div className="card h-100 skeleton-card">
      <div className="skeleton-image"></div>
      <div className="card-body">
        <div className="skeleton-title"></div>
        <div className="skeleton-rating"></div>
        <div className="skeleton-price"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

// Cart Item Skeleton
export const CartItemSkeleton = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-2">
            <div className="skeleton-image" style={{ height: '100px' }}></div>
          </div>
          <div className="col-md-4">
            <div className="skeleton-title" style={{ width: '80%' }}></div>
            <div className="skeleton-text" style={{ width: '60%', height: '16px' }}></div>
          </div>
          <div className="col-md-2">
            <div className="skeleton-price" style={{ width: '50%' }}></div>
          </div>
          <div className="col-md-2">
            <div className="skeleton-text" style={{ width: '100%', height: '38px' }}></div>
          </div>
          <div className="col-md-2">
            <div className="skeleton-text" style={{ width: '100%', height: '38px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Text Skeleton
export const TextSkeleton = ({ width = '100%', height = '20px' }) => {
  return (
    <div 
      className="skeleton-text" 
      style={{ width, height }}
    ></div>
  );
};

// Image Skeleton
export const ImageSkeleton = ({ height = '200px' }) => {
  return (
    <div 
      className="skeleton-image" 
      style={{ height }}
    ></div>
  );
};

export default {
  ProductCardSkeleton,
  CartItemSkeleton,
  TextSkeleton,
  ImageSkeleton
};