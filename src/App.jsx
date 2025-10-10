
import Navbar from './components/Navbar/Navbar';
import Topig from './components/Topig';
import Productlist from './pages/Productlist';
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white font-sans">
     
      <Navbar />
      <Topig/>
      <Productlist></Productlist>
      <Footer></Footer>
     
    </div>
  );
}
