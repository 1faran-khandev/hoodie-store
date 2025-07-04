import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

import look1 from '../assets/look1.jpg';
import look2 from '../assets/look2.jpg';
import look3 from '../assets/look3.jpg';
import look4 from '../assets/look4.jpg';
import look5 from '../assets/look5.png';
import look6 from '../assets/look6.jpg';

const HoodieLookbook = () => {
  const { addToCart } = useContext(CartContext);

  const looks = [
    {
      title: 'Urban Winter Hoodie',
      image: look1,
      price: 54.99,
      rating: '★★★★★',
    },
    {
      title: 'Summer Street Hoodie',
      image: look2,
      price: 47.99,
      rating: '★★★★★',
    },
    {
      title: 'Minimal Fall Hoodie',
      image: look3,
      price: 49.99,
      rating: '★★★★☆',
    },
    {
      title: 'Classic Spring Hoodie',
      image: look4,
      price: 52.99,
      rating: '★★★★☆',
    },
    {
      title: 'Bold Monochrome Hoodie',
      image: look5,
      price: 58.99,
      rating: '★★★★★',
    },
    {
      title: 'Vintage Street Hoodie',
      image: look6,
      price: 44.99,
      rating: '★★★☆☆',
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Hoodie Lookbook
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-14 max-w-xl mx-auto">
          Explore how our customers style their hoodies every season.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {looks.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative group transition hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-yellow-400 text-sm mb-1">{item.rating}</p>
                <p className="text-green-600 font-semibold text-lg mb-4">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => {
                    addToCart(item);
                    toast.success(`${item.title} added to cart!`);
                  }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoodieLookbook;
