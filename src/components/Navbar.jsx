import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';

const Navbar = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useContext(CartContext); 

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Lookbook', path: '/lookbook' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-900 dark:text-white">
            <Link to="/">HoodieStore</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 ml-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-blue-500 transition ${
                  location.pathname === link.path ? 'font-semibold text-blue-500' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative text-gray-700 dark:text-white hover:text-blue-500 transition"
            >
              <FiShoppingCart size={22} />
              {/* Cart Count Badge */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 text-gray-700 dark:text-white hover:text-blue-500 transition ${
                location.pathname === link.path ? 'font-semibold text-blue-500' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
