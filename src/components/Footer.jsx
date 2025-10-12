
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import reviewimage from '../assets/REVIEWS.png'


export default function Footer() {
  return (
    <>
      <footer className="bg-[#FBF5EC] text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            
           
            <div>
              <h3 className="font-bold text-base mb-4">Get In Touch</h3>
              <p className="font-semibold mb-1">Manufacturing Address:</p>
              <p className="mb-4">
                Tarini Niwas, Beside Satish Timber, <br />
                Behind Dr Raman Clinic, Balbhadarpur, <br />
                LaheriaSarai, Darbhanga 846001
              </p>
              <p className="font-semibold mb-1">Store Hours</p>
              <p className="mb-4">
                Monday to Saturday <br />
                10 AM to 6 PM
              </p>
              <p className="mb-2">Whatsapp: <a href="tel:+916201268880" className="hover:underline">+91-6201268880</a></p>
              <p>Email: <a href="mailto:namaste@jhajistore.com" className="hover:underline">namaste@jhajistore.com</a></p>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:opacity-75"><FaFacebookF /></a>
                <a href="#" aria-label="Instagram" className="hover:opacity-75"><FaInstagram /></a>
                <a href="#" aria-label="Twitter" className="hover:opacity-75"><FaTwitter /></a>
                <a href="#" aria-label="WhatsApp" className="hover:opacity-75"><FaWhatsapp /></a>
              </div>
            </div>

            
            <div>
              <h3 className="font-bold text-base mb-4">Policies</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="font-semibold hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Refund policy</a></li>
              </ul>
            </div>

           
            <div>
              <h3 className="font-bold text-base mb-4">Shop</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Sample Packs</a></li>
                <li><a href="#" className="hover:underline">15% OFF Combo</a></li>
                <li><a href="#" className="hover:underline">Mango Pickles</a></li>
                <li><a href="#" className="hover:underline">Mixed Pickles</a></li>
                <li><a href="#" className="hover:underline">Spicy Pickles</a></li>
                <li><a href="#" className="hover:underline">Sweet Pickles</a></li>
                <li><a href="#" className="hover:underline">All Products</a></li>
                <li><a href="#" className="hover:underline">Kheer Mixes</a></li>
                <li><a href="#" className="hover:underline">Rare Pickles</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-base mb-4">Useful Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Track Order</a></li>
                <li><a href="#" className="hover:underline">About JhaJi Store</a></li>
                <li><a href="#" className="hover:underline">Stories from JhaJi</a></li>
                <li><a href="#" className="hover:underline">Bhansa Ghar</a></li>
              </ul>
            </div>
          </div>

          
          <div className="text-center mt-10 pt-8 border-t border-gray-300">
            <div className="flex justify-center mb-4">
              
              <img src={reviewimage} alt="Verified Reviews" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-sm">
              <span className="text-yellow-500 text-lg">★★★★☆</span> Customers rate us <strong className="underline">4.7/5 based on 6698 reviews</strong>.
            </p>
          </div>
          
        </div>
        
        
        <div className="text-center mt-8 pt-6 border-t border-gray-300">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} JhaJi Store. A Brand by Mithila Pickles and Chutneys Private Limited. 2022
            </p>
        </div>
      </footer>

    
      <a href="https://wa.me/916201268880" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="fixed bottom-5 right-5 bg-[#ff4081] text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 z-50"
         aria-label="Chat on WhatsApp">
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}