
import { useSearch } from '../Context/SearchContext';
import { SearchIcon } from './Navbar/Icons'; 

function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useSearch();

 
  if (!isSearchOpen) {
    return null;
  }

  return (
   
    <div
     
      className="fixed inset-0 z-[60] ]"
      onClick={closeSearch}
    >
     
      <div className="bg-white w-full p-6 shadow-md" onClick={(e) => e.stopPropagation()}>
        <div className="max-w-2xl mx-auto">
         
          <div className="relative flex items-center">
            <span className="absolute left-4 text-gray-500 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search..."
              autoFocus 
              className="w-full pl-12 pr-12 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button onClick={closeSearch} className="absolute right-4 text-gray-500 font-bold text-2xl hover:text-black">
              &times;
            </button>
          </div>
          
          
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <span className="font-semibold text-gray-700">Popular Searches:</span>
            <a href="#" className="text-gray-600 hover:underline">Amla</a>
            <a href="#" className="text-gray-600 hover:underline">Lemon</a>
            <a href="#" className="text-gray-600 hover:underline">Suran</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
