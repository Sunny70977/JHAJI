import Products from './Product'; 
import ProductCard from './Productcard';

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-25 p-6">
      {Products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
