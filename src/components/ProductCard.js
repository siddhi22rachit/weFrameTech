import React from 'react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card transition-transform duration-300 hover:-translate-y-2">
      <div className="product-image-wrapper relative">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300">
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="product-info p-4">
        <h3 className="product-name text-lg font-bold mb-2">{product.name}</h3>
        <p className="product-description text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="product-price text-gray-800 font-bold">{product.price}€</span>
          <button className="add-to-cart flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;