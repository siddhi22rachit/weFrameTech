import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaSearch, FaShoppingCart, FaUserCircle, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SearchPopup from './searchPop';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchBarRef = useRef();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFocus = () => {
    setShowSearchPopup(true);
  };

  const handleSearchClose = () => {
    setShowSearchPopup(false);
  };

  const handleProfileToggle = () => {
    setShowProfile(!showProfile);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/art-de-la-table', text: 'Art de la table' },
    { href: '/mobilier', text: 'Mobilier' },
    { href: '/nappage', text: 'Nappage' },
    { href: '/materiel-salle', text: 'MATERIEL DE SALLE' },
    { href: '/cuisine', text: 'CUISINE' },
    { href: '/barbecue', text: 'BARBECUE' },
    { href: '/tente', text: 'TENTE' },
    { href: '/chauffage', text: 'CHAUFFAGE' },
    { href: '/podium', text: 'PODIUM-PISTE DE DANSE' },
    { href: '/son-lumiere', text: 'SON ET LUMIERE' },
    { href: '/packs', text: 'PACKS' },
    { href: '/consommables', text: 'CONSOMMABLES' }
  ];

  return (
    <nav className="bg-white shadow-md py-1.5 px-4 lg:px-6 sticky top-0 z-50">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Logo and Menu Section */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center space-x-2">
            {/* Hamburger menu only visible on mobile */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="block lg:hidden text-gray-600 focus:outline-none bg-gray-100 p-2 rounded-md"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/"
              className="flex-shrink-0"
            >
              <Image src="/logo.png" alt="weframetech" width={150} height={40} />
            </motion.a>
          </div>

          {/* Mobile-only cart and profile */}
          <div className="flex items-center space-x-4 lg:hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white rounded-full p-1"
            >
              <FaShoppingCart className="text-sm" />
            </motion.div>
            
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleProfileToggle}
                className="flex items-center space-x-1"
              >
                <FaUserCircle className="text-gray-600 text-lg" />
                <span className="text-gray-600 text-sm">John</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full mt-1 lg:mt-0 max-w-md relative" ref={searchBarRef}>
          <motion.input
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            type="text"
            placeholder="Rechercher un produit"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={handleSearchFocus}
            className="w-full px-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
          <SearchPopup
            isOpen={showSearchPopup}
            searchQuery={searchQuery}
            onSearch={handleSearch}
            onClose={handleSearchClose}
            searchBarRef={searchBarRef}
          />
        </div>

        {/* Desktop Navigation Items with Featured Links, Cart, and Profile */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Featured links */}
          <motion.a
            href="/inspirations"
            whileHover={{ y: -2 }}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-sm"
          >
            Inspirations
          </motion.a>
          <motion.a
            href="/mes-favoris"
            whileHover={{ y: -2 }}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-sm"
          >
            Mes favoris
          </motion.a>
          
          {/* Cart and Profile for desktop */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white rounded-full p-1"
          >
            <FaShoppingCart className="text-sm" />
          </motion.div>
          
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleProfileToggle}
              className="flex items-center space-x-1"
            >
              <FaUserCircle className="text-gray-600 text-lg" />
              <span className="text-gray-600 text-sm">John</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white"
          >
            <div className="py-4 space-y-2">
              {/* Featured Links for mobile */}
              <div className="border-b border-gray-100 pb-2 mb-2">
                <motion.a
                  href="/inspirations"
                  whileHover={{ x: 10 }}
                  className="block text-gray-600 hover:text-blue-500 py-2 px-4 text-sm font-medium transition-colors duration-300"
                >
                  Inspirations
                </motion.a>
                <motion.a
                  href="/mes-favoris"
                  whileHover={{ x: 10 }}
                  className="block text-gray-600 hover:text-blue-500 py-2 px-4 text-sm font-medium transition-colors duration-300"
                >
                  Mes favoris
                </motion.a>
              </div>
              
              {/* Regular Navigation Links for mobile */}
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 10 }}
                  className="block text-gray-600 hover:text-blue-500 py-2 px-4 text-sm transition-colors duration-300"
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex justify-center space-x-6 text-gray-600 text-sm mt-5">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ y: -2 }}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            {link.text}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;