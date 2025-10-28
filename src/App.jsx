import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Topig from './components/Topig';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart'; 
import SearchOverlay from './components/SearchOverlay';
import LoginPage from './pages/LoginPage'; 

export default function App() {
  return (
    <Router>
      <div className="bg-white font-sans">
        <Navbar />
        <Routes>
          
          <Route 
            path="/" 
            element={
              <>
                <Topig />
                <ProductPage />
                
              </>
            } 
          />

          
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />

        
        <ShoppingCart />
        <SearchOverlay />
      </div>
    </Router>
  );
}
