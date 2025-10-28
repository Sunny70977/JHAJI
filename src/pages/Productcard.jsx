import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useCart } from "../Context/CartContext"; 

const ProductCard = ({
  image,
  hoverimage,
  title,
  oldPrice,
  newPrice,
  weights,
  rating = 0,
  reviews,
}) => {
  const { addToCart } = useCart(); 

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <FaStar key={index} className="text-yellow-500 text-lg" />;
    } else if (rating >= index + 0.5) {
      return <FaStarHalfAlt key={index} className="text-yellow-500 text-lg" />;
    } else {
      return <FaRegStar key={index} className="text-yellow-500 text-lg" />;
    }
  });

  const handleAddToCart = () => {
    addToCart({
      image,
      title,
      price: newPrice,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center group w-full">
      <div className="relative w-full h-96">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
         <img
    src={hoverimage}
    alt={`${title} alternate view`}
    className="absolute top-0 left-0 w-full h-full object-cover 
transition-all duration-700 ease-in-out delay-300 
opacity-0 group-hover:opacity-100
"

  />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 text-center mt-3">{title}</h2>

      <div className="flex items-center gap-1 mt-2">
        {stars}
        <span className="ml-2 text-gray-600 text-sm">
          {rating} ({reviews})
        </span>
      </div>

      <div className="mt-2 text-center">
        <span className="line-through text-gray-400 text-sm mr-2">Rs. {oldPrice}</span>
        <span className="text-pink-600 font-bold text-xl">Rs. {newPrice}</span>
      </div>

      <select className="mt-3 border border-gray-300 rounded p-2 w-full text-sm">
        {weights.map((w, index) => (
          <option key={index} value={w}>
            {w}
          </option>
        ))}
      </select>

     
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-pink-500 hover:bg-pink-600 text-white py-2 w-full rounded font-semibold"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
