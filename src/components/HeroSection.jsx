import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { CartContext } from '../context/CartContext';

import hoodie1 from '../assets/hoodie1.png';
import hoodie2 from '../assets/hoodie2.jpg';
import accessories from '../assets/Accessories.jpg';
import streetwear from '../assets/Streetwear.jpg';
import minimalist from '../assets/Minimalist.jpg';

const products = [
  { title: 'New Arrivals', image: hoodie2, price: 49.99 },
  { title: 'Accessories', image: accessories, price: 29.99 },
  { title: 'Streetwear Hoodie', image: streetwear, price: 59.99 },
  { title: 'Minimalist', image: minimalist, price: 39.99 },
];

const HeroSection = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 relative overflow-hidden">
      {/* Hero Product */}
      <div className="max-w-5xl mx-auto mb-20">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative group transition hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r from-green-500 to-blue-500 shadow-md">
            Featured
          </div>

          <div className="p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Streetwear Cyberpunk Hoodie
            </h1>
          </div>

          {/* Image */}
          <img
            src={hoodie1}
            alt="Main Hoodie"
            className="w-full h-[450px] object-contain group-hover:scale-105 transition-transform duration-500"
          />

          {/* Content */}
          <div className="p-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
              Innovative Double Layered Zipper Mask Hoodie for the next-gen streetwear style.
            </p>
            <p className="text-2xl font-bold text-green-600 mb-5">$49.99</p>

            <motion.button
              onClick={() =>
                handleAddToCart({
                  title: 'Double Layered Zipper Mask Hoodie',
                  image: hoodie1,
                  price: 49.99,
                })
              }
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🛒 Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-14">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative group transition hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-green-600 font-semibold text-lg mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-yellow-400 text-sm mb-3">★★★★★</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
