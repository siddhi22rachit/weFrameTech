import React from 'react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full object-cover rounded-t-lg"
        />
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>
      
      <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
      <p className="text-xs text-gray-500 mt-1">{product.description}</p>
      
      <div className="flex items-center justify-between mt-3">
        <span className="text-lg font-bold">{product.price}€</span>
        
        <button 
          className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
        >
          <ShoppingCartIcon className="h-4 w-4 mr-2" />
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default ProductCard;