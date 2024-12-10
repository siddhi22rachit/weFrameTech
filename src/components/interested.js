import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Interested = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const products = [
    {
      id: 1,
      title: "Title",
      price: "0,35€",
      pieces: "20 pieces",
      ref: "VABGN5",
      category: "ART DE LA TABLE"
    },
    {
      id: 2,
      title: "Title",
      price: "0,35€",
      pieces: "20 pieces",
      ref: "VABGN5",
      category: "ART DE LA TABLE"
    },
    {
      id: 3,
      title: "Title",
      price: "0,35€",
      pieces: "20 pieces",
      ref: "VABGN5",
      category: "ART DE LA TABLE LOT"
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const container = scrollContainerRef.current;
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => quantity > 1 && setQuantity((prev) => prev - 1);
  
    return (
      <div 
        className="relative bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 group min-w-[280px] sm:min-w-[340px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-4 right-4 z-10">
          <button className="p-2 transition-transform hover:scale-110">
            <FaHeart className="text-gray-400 hover:text-gray-600 text-xl" />
          </button>
        </div>
  
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs font-medium text-gray-600">{product.category}</span>
        </div>
  
        <div className="relative aspect-square flex items-center justify-center">
          <div className="w-3/4 h-3/4">
            <Image
              src="/table.png"
              alt={product.title}
              width={500}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
  
        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
        {isHovered ? (
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between space-x-2 mb-2">
              <div className="flex items-center space-x-2 bg-white rounded-lg border">
                <button 
                  onClick={handleDecrement}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 py-1">{quantity}</span>
                <button 
                  onClick={handleIncrement}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="bg-pink-500 text-white px-4 py-1 rounded-lg hover:bg-pink-600 transition-colors">
                Ajouter
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-white">
            <h3 className="text-xl font-light mb-2">{product.title}</h3>
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xl font-light">{product.price}</span>
                <span className="text-sm text-gray-500">/Pièce</span>
                <div className="text-xs text-gray-500">REF : {product.ref}</div>
              </div>
              <span className="text-sm text-blue-600">{product.pieces}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <h2 className="text-2xl font-light mb-6">Ces produits pourraient vous intéresser</h2>
      
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
        )}
        
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interested;