import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div>
          <p className="text-lg mb-4">Your cart is empty.</p>
          <Link to="/" className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
            Back to Shop
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow"
              >
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
