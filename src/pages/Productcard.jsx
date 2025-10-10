const ProductCard = ({ image, name, price }) => {
  return (
    <div className="mt-8 w-100 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-100 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{name}</h2>
        <p className="text-gray-700 font-medium text-2xl">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
