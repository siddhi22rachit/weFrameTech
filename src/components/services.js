import React from 'react';
import { Package, Sparkles, ShoppingCart, Truck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="group flex flex-col items-center p-6 text-center transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl rounded-lg bg-white hover:bg-gradient-to-b hover:from-white hover:to-purple-50 cursor-pointer"
    style={{ 
      animation: 'fadeInUp 0.6s ease-out forwards',
      animationDelay: `${delay}ms`,
      opacity: 0,
      perspective: '1000px'
    }}
  >
    <div className="mb-4 p-4 rounded-full bg-purple-100 text-purple-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-200">
      <Icon 
        size={24} 
        className="animate-pulse transition-transform group-hover:animate-spin-slow"
        style={{ animation: 'pulse 2s infinite' }}
      />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-purple-600 transform group-hover:scale-105">{title}</h3>
    <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-700">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "Livraison & Reprise",
      description: "Selon vos besoins",
      delay: 100
    },
    {
      icon: Sparkles,
      title: "Nettoyage",
      description: "Selon vos besoins",
      delay: 300
    },
    {
      icon: ShoppingCart,
      title: "Commande Illimitée",
      description: "Tout est possible",
      delay: 500
    },
    {
      icon: Truck,
      title: "Transport & Enlèvement",
      description: "On s'occupe de tout",
      delay: 700
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 overflow-hidden">
      <div 
        className="text-center mb-12 animate-fadeIn"
        style={{ animation: 'fadeIn 1s ease-out' }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
          On s'occupe de{' '}
          <span className="text-cyan-500 inline-block ">tout</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={service.delay}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .grid {
            grid-gap: 1rem;
          }
          .text-3xl {
            font-size: 1.875rem;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .grid {
            grid-gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;