import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
       
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    openCart();
  };


  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((product) => product.id !== productId)
    );
  };

  
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };


  const value = {
    isCartOpen,
    openCart,
    closeCart,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity, 
    cartSubtotal,   
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};