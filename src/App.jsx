import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import SaleBanner from './components/SaleBanner';  // ✅ Add this import
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Policies from './pages/Policies';
import Wishlist from './pages/Wishlist';
import SingleProduct from './pages/SingleProduct';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <RecentlyViewedProvider>
          <Router>
            <SaleBanner />  {/* ✅ Add this before Navbar */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Footer />
          </Router>
        </RecentlyViewedProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;