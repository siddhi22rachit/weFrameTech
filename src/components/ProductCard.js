import React from 'react';
import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <div className="relative mb-4">
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          layout="responsive"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <HeartIcon className="h-6 w-6 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">{product.price}€</span>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default ProductCard;