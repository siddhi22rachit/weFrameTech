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
    <div className="flex flex-col md:flex-row items-center min-h-[500px] bg-gray-50 px-4 md:px-8 rounded-lg">
      {/* Left side - Image */}
      <div className="w-full h-[500px] relative overflow-hidden rounded-lg md:w-1/2">
        <img
          src="/sub.png"
          alt="Modern living room with green sofa"
          className="w-full h-full object-cover md:blur-0 blur-sm"
        />
        {/* Content overlay for smaller screens */}
        <div className="absolute inset-0 flex flex-col items-center justify-center md:hidden bg-black bg-opacity-40 text-white p-4">
          <h2 className="text-2xl font-bold mb-4">
            S'inscrire & économiser <span className="text-cyan-400">10%</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@doe.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="bg-cyan-400 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-500 transition-all duration-300 transform hover:translate-x-1"
            >
              S'INSCRIRE
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full p-8 md:p-16 bg-pink-50 rounded-r-lg hidden md:block md:w-1/2">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            S'inscrire & économiser{' '}
            <span className="text-cyan-400">10%</span>
          </h2>
          
          <p className="text-gray-600 mb-8">
            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
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
                className="bg-cyan-400 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-500 transition-all duration-300 transform hover:translate-x-1"
              >
                S'INSCRIRE
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
