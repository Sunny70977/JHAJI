

import { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import Productcard from "./Productcard";
import Product from "./Product";


export default function ProductPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    taste: [], ingredient: [], oil: [], onionGarlic: [],
  });
  
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
   
    <div className="flex flex-col md:flex-row px-4 sm:px-6 py-4 gap-6">
      
    
      <div className="md:hidden flex justify-between items-center">
        <h2 className="text-xl font-bold">Products</h2>
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="p-2 rounded border font-semibold flex items-center gap-2"
        >
         
          Filters
        </button>
      </div>

      
      <div className={`w-full md:w-64 ${isFilterOpen ? 'block' : 'hidden'} md:block`}>
        <FilterSidebar
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>

      
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {Product.map((item) => (
          <Productcard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}