import React, { useState, useRef, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { CartContext } from '../context/CartContext';

import winterImage from '../assets/winter-warmth.jpg';
import summerImage from '../assets/summerlighter.png';

const seasonalItems = [
  {
    title: 'Winter Warmth',
    image: winterImage,
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 124,
    badge: 'Bestseller',
    description: 'Ultra-soft fleece lining for maximum comfort',
    colors: ['#1a1a1a', '#8b4513', '#2c3e50'],
  },
  {
    title: 'Summer Light Hoodie',
    image: summerImage,
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviews: 98,
    badge: 'New',
    description: 'Breathable cotton blend for warm weather',
    colors: ['#ffffff', '#87ceeb', '#90ee90'],
  },
];

const SeasonalPicks = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedColors, setSelectedColors] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  const handleAddToCart = (item, colorIndex) => {
    const color = item.colors[colorIndex] || item.colors[0];
    addToCart({ ...item, color });
    toast.success(`${item.title} added to cart!`);
  };

  const StarRating = ({ rating }) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < full; i++) {
      stars.push(<FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalf) {
      stars.push(
        <div key="half" className="relative">
          <FiStar className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    for (let i = 0; i < 5 - Math.ceil(rating); i++) {
      stars.push(<FiStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return <div className="flex items-center gap-1">{stars}</div>;
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Seasonal Picks
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Curated hoodies for your comfort all year round.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {seasonalItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative group transition hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            {/* Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r from-pink-500 to-red-500 shadow-md">
              {item.badge}
            </div>

            {/* Wishlist */}
            <div className="absolute top-4 right-4">
              <FiHeart className="text-gray-300 hover:text-red-400" />
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                {item.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={item.rating} />
                <span className="text-sm text-gray-500">({item.reviews})</span>
              </div>

              {/* Colors */}
              <div className="flex gap-2 my-3">
                {item.colors.map((color, cIndex) => (
                  <button
                    key={cIndex}
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColors[index] === cIndex
                        ? 'border-blue-500'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      setSelectedColors({ ...selectedColors, [index]: cIndex })
                    }
                  />
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-lg font-bold text-green-600">
                    ${item.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${item.originalPrice}
                  </span>
                </div>

                {/* Add to Cart */}
                <motion.button
                  onClick={() =>
                    handleAddToCart(item, selectedColors[index] || 0)
                  }
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiShoppingCart />
                  Add
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalPicks;
