import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Added for navigation
import { useCart } from '../../Context/CartContext';
import { useSearch } from '../../Context/SearchContext';
import jhaJiLogo from '../../assets/LOGOJHAJI.avif';

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
  SearchIcon,
  UserIcon,
  CartIcon,
  MenuIcon,
} from './Icons';

export default function Navbar() {
  const { openCart } = useCart();
  const { openSearch } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 bg-white font-sans font-bold shadow-md">
      {/* Top bar with social icons */}
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-3">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><InstagramIcon /></a>
              <a href="#"><TwitterIcon /></a>
              <a href="#"><WhatsappIcon /></a>
            </div>
            <div className="hidden sm:block text-sm text-gray-600">
              No Leakage Shipping. Delivering across IN
            </div>
            <div className="w-24 hidden sm:block"></div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left side: Menu button and Navigation */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
            <nav className="hidden md:flex items-center space-x-8 font-bold text-lg">
               <Link to="/" className="relative text-gray-800 after:block after:h-0.5 after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                All Products</Link>
               
              
              <a href="#" className="relative text-gray-800 after:block after:h-0.5 after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Sample Packs
              </a>
              <a href="#" className="relative text-gray-800 after:block after:h-0.5 after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                15% OFF Combos
              </a>
            </nav>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img className="h-28 w-auto" src={jhaJiLogo} alt="JhaJi Logo" />
          </div>

          {/* Right side: Search, User, and Cart */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* UPDATED SEARCH BAR */}
            <div
              onClick={openSearch}
              className="hidden lg:flex items-center justify-between border border-gray-300 rounded-md px-4 py-2 w-64 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-500 text-sm">Search products</span>
              <SearchIcon className="text-gray-700 h-5 w-5" />
            </div>

            {/* Search Icon for mobile */}
            <button
              onClick={openSearch}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            {/* ✅ User Icon - opens Login Page */}
            <Link
              to="/login"
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Open login page"
            >
              <UserIcon />
            </Link>

            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Open shopping cart"
            >
              <CartIcon />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a href="#" className="text-gray-800">All Products</a>
            <a href="#" className="text-gray-800">Sample Packs</a>
            <a href="#" className="text-gray-800">15% OFF Combos</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
