
import { useCart } from '../Context/CartContext';

const NoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const CouponIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
  </svg>
);

function ShoppingCart() {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal    
  } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"
        onClick={closeCart}
        aria-hidden="true"
      ></div>

     
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
         
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button onClick={closeCart} className="p-2">
              <span className="sr-only">Close cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          
          <div className="flex-grow p-4 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">Your cart is currently empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4 py-4 border-b last:border-b-0">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex flex-col flex-grow">
                    <p className="font-bold text-base">{item.title}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.weight || ''}</p>
                    <p className="text-base font-semibold mb-3">Rs. {item.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg">-</button>
                        <span className="px-3 py-1 text-base">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg">+</button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 text-sm underline hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t-2 bg-gray-50">
              <div className="flex justify-around py-4 border-b mb-4">
                <button className="flex flex-col items-center text-gray-700">
                  <NoteIcon />
                  <span>Note</span>
                </button>
                <button className="flex flex-col items-center text-gray-700">
                  <CouponIcon />
                  <span>Coupon</span>
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Subtotal</span>
                <span className="text-lg font-bold">Rs. {cartSubtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-pink-500 text-white font-bold py-3 rounded-md hover:bg-pink-600 transition-colors">
                CHECK OUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;