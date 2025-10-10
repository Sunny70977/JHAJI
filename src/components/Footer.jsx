
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} JhaJi Store. All rights reserved.
        </p>

        
        <div className="flex space-x-6 my-3 md:my-0">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </div>

        
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition">Facebook</a>
          <a href="#" className="hover:text-gray-300 transition">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
