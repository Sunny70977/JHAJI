import Products from './Product';
import ProductCard from './Productcard';

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}       
          oldPrice={item.oldPrice} 
          newPrice={item.newPrice} 
          weights={item.weights}     
          rating={item.rating}     
          reviews={item.reviews}  
          hoverimage={item.hoverimage} 
        />
      ))}
    </div>
  );
};

export default ProductList;

