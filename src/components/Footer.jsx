import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-16 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            HoodieStore
          </h3>
          <p className="text-sm leading-relaxed">
            Style Meets Comfort.<br />
            Premium streetwear for every season.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm mb-2">Email: <a href="mailto:support@hoodiestore.com" className="hover:text-green-500 transition">support@hoodiestore.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+923001234567" className="hover:text-green-500 transition">+92 300 1234567</a></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-300 dark:border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} HoodieStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
