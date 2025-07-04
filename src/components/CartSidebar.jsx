import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 w-full max-w-md h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl z-[999] overflow-y-auto rounded-l-2xl"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Shopping Cart ({cart.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="px-6 py-4 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center mt-16">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  Your cart is empty 🛒
                </p>
                <Link
                  to="/"
                  onClick={onClose}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b pb-4 dark:border-gray-700"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg shadow"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ${item.price.toFixed(2)}
                    </p>
                    {item.color && (
                      <div className="mt-1 flex items-center">
                        <span className="text-xs text-gray-500">Color:</span>
                        <div
                          className="inline-block w-4 h-4 ml-2 rounded-full border shadow"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-2 text-red-500 hover:text-red-700"
                    title="Remove item"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="px-6 py-4 border-t dark:border-gray-700 space-y-4">
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-2 rounded-full hover:from-green-600 hover:to-blue-600 transition-all"
                >
                  Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="px-4 py-2 text-sm text-red-500 hover:text-red-700 border border-red-300 dark:border-red-500 rounded-full"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
