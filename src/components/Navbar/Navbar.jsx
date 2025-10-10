
import jhaJiLogo from '../../assets/LOGOJHAJI.avif';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
  SearchIcon,
  UserIcon,
  CartIcon,
} from './Icons';

export default function Navbar() {
  return (
    <div className="bg-white font-sans font-bold">
      <div className="border-b">
        <div className="ml-[50px]">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-3">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><InstagramIcon /></a>
              <a href="#"><TwitterIcon /></a>
              <a href="#"><WhatsappIcon /></a>
            </div>
            <div className="text-sm text-gray-600">
              No Leakage Shipping. Delivering across IN
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <header className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
         
          <nav className="flex items-center space-x-8 font-bold text-xl">
            <a href="#" className="relative text-gray-800 after:block after:h-0.5 after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              All Products
            </a>
            <a href="#" className="relative text-gray-800 after:block after:h-0.5 after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Sample Packs
            </a>
            <a href="#" className="relative text-gray-800 after:block after:h-0.5 after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              15% OFF Combos
            </a>
          </nav>

          
          <div className="absolute left-1/2 -translate-x-1/2 flex-shrink-0">
            <img
              className="h-30 w-auto"
              src={jhaJiLogo}
              alt="JhaJi Logo"
            />
          </div>

          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
            </div>
            <a href="#"><UserIcon /></a>
            <a href="#"><CartIcon /></a>
          </div>
        </div>
      </header>
    </div>
  );
}
