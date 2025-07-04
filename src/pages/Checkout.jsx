import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-20 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Checkout
        </h2>

        {cart.length === 0 && !paymentSuccess ? (
          <div className="text-center mt-20">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Your cart is currently empty 🛒
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : paymentSuccess ? (
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-4 text-green-500">✅ Payment Successful!</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Thank you for your purchase.
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Return to Shop
            </Link>
          </div>
        ) : showPaymentForm ? (
          <form
            onSubmit={handlePayment}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-center mb-4">Payment Details</h3>
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Card Number</label>
              <input
                type="text"
                required
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Expiry Date</label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">CVV</label>
                <input
                  type="text"
                  required
                  placeholder="123"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Pay ${total}
            </button>
          </form>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${item.price.toFixed(2)}
                      </p>
                      {item.color && (
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">Color:</span>
                          <div
                            className="w-4 h-4 rounded-full border ml-2 shadow"
                            style={{ backgroundColor: item.color }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-right">
              <h3 className="text-2xl font-bold mb-6">Total: ${total}</h3>
              <button
                onClick={() => setShowPaymentForm(true)}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
