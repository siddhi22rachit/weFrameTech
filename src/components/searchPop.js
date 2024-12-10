import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaHistory, FaArrowRight } from 'react-icons/fa';

const SearchPopup = ({ isOpen, searchQuery, onSearch, onClose, searchBarRef }) => {
  const [recentSearches] = useState([
    'fourchettes',
    'fourchette grande',
    'fourchette Piranha',
    'Sport addict'
  ]);

  const popularProducts = [
    {
      id: 1,
      name: 'Produit Simple',
      category: 'ART DE LA TABLE',
      price: '7€',
      quantity: '20 pièces',
      image: '/plate.jpg'
    },
    {
      id: 2,
      name: 'Produit Gamme',
      category: 'ART DE LA TABLE',
      price: '2,20€',
      quantity: '20 pièces',
      image: '/spoons.webp'
    },
    {
      id: 3,
      name: 'Jewel Grand Couteau',
      category: 'ART DE LA TABLE',
      price: '7€',
      quantity: '20 pièces',
      image: '/spoon.webp'
    }
  ];

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target) && 
        searchBarRef.current && 
        !searchBarRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, searchBarRef]);

  if (!isOpen) return null;

  return (
    <div 
      ref={popupRef}
      className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg mt-1 z-50"
    >
      <div className="p-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Suggestions Section */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Suggestions</h3>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 cursor-pointer group"
                >
                  <FaHistory className="text-xs text-gray-400 group-hover:text-blue-500" />
                  <span className="text-sm">{search}</span>
                  <FaArrowRight className="text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Produits</h3>
            <div className="flex overflow-x-auto space-x-3 pb-2">
              {popularProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="cursor-pointer group flex-shrink-0"
                  style={{ width: 'calc(33% - 0.5rem)' }}
                >
                  <div className="relative w-full aspect-square md:h-20">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{product.category}</div>
                  <div className="text-xs font-medium group-hover:text-blue-500 line-clamp-1">
                    {product.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {product.price} / {product.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Button */}
        <div className="mt-4 text-center border-t pt-3">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
            onClick={() => {
              onClose();
            }}
          >
            Voir tous les résultats
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;