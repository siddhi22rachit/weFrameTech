import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const Header = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-sm mb-4">
        <span>Home</span>
        <span className="mx-2">•</span>
        <span className="text-gray-500">Art de la table</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Thumbnails for Desktop */}
        <div className="hidden lg:flex w-16 flex-col gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-md p-1 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <Image
                src="/tablepic.png"
                alt={`Thumbnail ${item}`}
                width={40}
                height={40}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="lg:flex-1">
          <div className="bg-white rounded-md overflow-hidden p-4">
            <Image
              src="/mainpic.png"
              alt="Cheese - Raclette 1/2 Roue"
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>

          {/* Thumbnails Row for Mobile */}
          <div className="flex lg:hidden justify-center gap-4 overflow-x-auto py-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-md p-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow flex-shrink-0"
              >
                <Image
                  src="/tablepic.png"
                  alt={`Thumbnail ${item}`}
                  width={60}
                  height={60}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="lg:w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h1 className="text-lg font-light">Cheese - appareil à raclette 1/2 roue</h1>
            <button className="p-1">
              <FaHeart className="text-xl text-gray-400 hover:text-red-500 transition-colors" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-lg">39,50€ <span className="text-gray-500 text-xs">/pièce</span></p>

            <div className="flex items-center gap-2 text-gray-600">
              <span>20<sup>cm</sup></span>
              <span>|</span>
              <span>50<sup>cm</sup></span>
              <span className="ml-auto text-gray-400">RÉF : VABGN5</span>
            </div>

            <div className="space-y-2 text-gray-600">
              <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
              <p>Réglable en hauteur</p>
              <p>Appareil à raclette professionnel</p>
              <p>Boîtier de chauffe horizontal réglable en hauteur</p>
            </div>

            <div className="text-gray-600">
              <p>220V</p>
              <p>900W</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-2">
              <div className="flex border rounded-md">
                <button
                  onClick={handleDecrement}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 py-1 border-x">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-[#5CD6D6] text-white py-1 px-3 rounded-md hover:bg-[#4AC6C6] transition-colors">
                AJOUTER AU PANIER
              </button>
            </div>

            {/* Delivery and Questions */}
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-t cursor-pointer hover:text-gray-700">
                <span className="font-medium">LIVRAISONS</span>
                <span className="text-lg">+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-t cursor-pointer hover:text-gray-700">
                <span className="font-medium">QUESTIONS</span>
                <span className="text-lg">+</span>
              </div>
            </div>

            {/* Description Section */}
            <div className="pt-4">
              <h3 className="font-medium mb-2">Description produit</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Festi vous propose à la location un/une Jewel - grand couteau/10pc pour votre événement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence VAJGC. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d&apos;autre produit à louer de ce type dans la catégorie Art de la Table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;