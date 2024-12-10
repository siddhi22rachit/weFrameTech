import React, { useState } from 'react';
import { Twitter, Instagram, Linkedin, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const [openSection, setOpenSection] = useState('');
  
  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle section visibility
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const footerSections = [
    {
      title: 'INFOS PRATIQUES',
      links: [
        { href: '/a-propos', text: 'À propos' },
        { href: '/livraisons', text: 'Livraisons & Reprises' },
        { href: '/mode-emploi', text: "Mode d'emploi" },
        { href: '/faq', text: 'F.A.Q' }
      ]
    },
    {
      title: 'LÉGAL',
      links: [
        { href: '/mentions-legales', text: 'Mentions légales' },
        { href: '/cgu', text: 'CGU' },
        { href: '/cgv', text: 'CGV' },
        { href: '/confidentialite', text: 'Politique de confidentialité' }
      ]
    },
    {
      title: 'MON COMPTE',
      links: [
        { href: '/compte', text: 'Accéder à mon compte' },
        { href: '/liste-envie', text: "Ma liste d'envie" },
        { href: '/creer-compte', text: 'Créer un compte' },
        { href: '/mot-passe-oublie', text: 'Mot de passe oublié' }
      ]
    }
  ];

  return (
    <footer className="bg-white py-8 px-4 md:px-8 border-t border-gray-100 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gray-900 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center ">
          <Link href="/" className="block">
            <img 
              src="/logo.png" 
              alt="WeFrameTech Logo" 
              className="h-20"
            />
          </Link>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full py-4 flex justify-between items-center text-left"
              >
                <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                {openSection === section.title ? (
                  <ChevronUp size={20} className="text-gray-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-600" />
                )}
              </button>
              {openSection === section.title && (
                <ul className="space-y-3 pb-4">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between text-sm">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">NOUS SUIVRE</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 text-center text-sm text-gray-600">
          © 2024 WeFrameTech. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;