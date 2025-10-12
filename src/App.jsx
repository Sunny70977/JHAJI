import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Topig from './components/Topig';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white font-sans">
      <Navbar />
      <Topig />
      <ProductPage />
      <Footer />
    </div>
  );
}

