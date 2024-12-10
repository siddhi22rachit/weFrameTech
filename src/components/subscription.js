import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg">
      {/* Left side - Image */}
      <div className="hidden md:block relative">
        <img 
          src="/subscription-image.jpg" 
          alt="Subscription" 
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Content overlay for smaller screens */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center md:hidden">
          <h2 className="text-white text-2xl font-bold text-center">
            S'inscrire & économiser 10%
          </h2>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">
          S'inscrire & économiser{' '}
          <span className="text-cyan-600">10%</span>
        </h2>

        <p className="text-gray-600 mb-6">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
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
              className="flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              S'INSCRIRE
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionSection;