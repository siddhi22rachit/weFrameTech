import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; // Added Next.js Image component

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 relative">
        <Image 
          src="/subscription-image.jpg" 
          alt="Subscription offer" 
          layout="responsive"
          width={600}
          height={400}
          className="object-cover"
        />
        {/* Content overlay for smaller screens */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:hidden">
          <h2 className="text-white text-2xl font-bold">
            S&apos;inscrire &amp; économiser 10%
          </h2>
        </div>
      </div>
      
      {/* Right side - Content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">
          S&apos;inscrire &amp; économiser 10%
        </h2>
        
        <p className="text-gray-600 mb-6">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&apos;t. Yet busy any meeting shark light marginalised 4-blocker message.
        </p>
        
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@doe.com"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="ml-2 px-6 py-3 bg-cyan-500 text-white rounded-lg flex items-center hover:bg-cyan-600 transition-colors"
          >
            S&apos;INSCRIRE
            <ArrowRight className="ml-2" size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionSection;