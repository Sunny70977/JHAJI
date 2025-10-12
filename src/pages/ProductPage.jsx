import { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import Productcard from "./Productcard";
import Product from "./Product";

export default function ProductPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    taste: [],
    ingredient: [],
    oil: [],
    onionGarlic: [],
  });

  return (
    <div className="flex px-6 py-4 gap-6">
      
      <div className="w-1/4">
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
