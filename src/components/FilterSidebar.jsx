

export default function FilterSidebar({ selectedFilters, setSelectedFilters }) {
  const tastes = ["Tangy", "Masaledaar", "Medium Spicy", "Spicy", "Salty"];
  const ingredients = [
    "Amla", "Imli", "Garlic", "Jackfruit", "Green Chilli", "Red Chilli",
    "Gobhi", "Gajar", "Shalgam", "Lemon", "Oal"
  ];
  const oilContent = ["Delhi Style-Hint of Oil", "Bihari Style-Full of Oil"];
  const onionGarlic = ["No", "Yes"];

  const toggleFilter = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category]?.includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...(prev[category] || []), value],
    }));
  };

  return (
    <div className="w-64 p-4 border-r space-y-6">
      <h2 className="text-2xl font-bold">Filters</h2>

      {/* Taste */}
      <div>
        <h3 className="font-semibold mb-2">Taste</h3>
        <div className="flex flex-wrap gap-2">
          {tastes.map((taste) => (
            <button
              key={taste}
              onClick={() => toggleFilter("taste", taste)}
              className={`px-2 py-1 rounded ${
                selectedFilters.taste?.includes(taste)
                  ? "bg-black text-white"
                  : "text-gray-600 border"
              }`}
            >
              {taste}
            </button>
          ))}
        </div>
      </div>

      {/* Ingredient */}
      <div>
        <h3 className="font-semibold mb-2">Ingredient</h3>
        <div className="flex flex-wrap gap-2">
          {ingredients.map((item) => (
            <button
              key={item}
              onClick={() => toggleFilter("ingredient", item)}
              className={`px-2 py-1 rounded ${
                selectedFilters.ingredient?.includes(item)
                  ? "bg-black text-white"
                  : "text-gray-600 border"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Oil Content */}
      <div>
        <h3 className="font-semibold mb-2">Oil Content</h3>
        <div className="flex flex-col gap-2">
          {oilContent.map((item) => (
            <button
              key={item}
              onClick={() => toggleFilter("oil", item)}
              className={`px-2 py-1 rounded border ${
                selectedFilters.oil?.includes(item)
                  ? "bg-black text-white"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Onion/Garlic */}
      <div>
        <h3 className="font-semibold mb-2">Has Onion/Garlic</h3>
        <div className="flex gap-2">
          {onionGarlic.map((item) => (
            <button
              key={item}
              onClick={() => toggleFilter("onionGarlic", item)}
              className={`px-3 py-1 rounded border ${
                selectedFilters.onionGarlic?.includes(item)
                  ? "bg-black text-white"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
