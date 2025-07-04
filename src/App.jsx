import React, { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SeasonalPicks from './components/SeasonalPicks';
import HoodieLookbook from './components/HoodieLookbook';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Checkout from './pages/Checkout';
import About from './pages/About';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { CartContext } from './context/CartContext';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useContext(CartContext);  

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 font-poppins">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: '#333',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '12px 16px',
          },
        }}
      />

      {/* Pass cart.length to Navbar */}
      <Navbar onCartClick={openCart} cartCount={cart.length} />

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
            />
            <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
          </>
        )}
      </AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <SeasonalPicks />
              <HoodieLookbook />
              <Footer />
            </>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/lookbook" element={<HoodieLookbook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
