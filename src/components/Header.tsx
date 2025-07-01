import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  content: any;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="blautech-container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blautech-secondary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blautech-secondary rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${isScrolled ? 'text-blautech-primary' : 'text-white'}`}>
                {content.branding.logo}
              </span>
              <span className={`text-xs font-light ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                {content.branding.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Menu Items */}
            <div className="flex items-center space-x-6">
              {content.navigation.main.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-blautech-secondary ${
                    isScrolled ? 'text-blautech-primary' : 'text-white'
                  } ${item.label === 'ENG' ? 'flex items-center space-x-1' : ''}`}
                >
                  {item.label === 'ENG' && (
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23FFF' stroke-width='6'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30,0 L30,30 M0,15 L60,15' stroke='%23FFF' stroke-width='10'/%3E%3Cpath d='M30,0 L30,30 M0,15 L60,15' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" 
                      alt="English" 
                      className="w-5 h-3"
                    />
                  )}
                  {item.label}
                </a>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center space-x-3 ml-6 border-l border-gray-300 pl-6">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${content.navigation.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                <MessageCircle size={16} />
                <span className="font-medium text-sm">WhatsApp</span>
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${content.navigation.contact.phone}`}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'border-blautech-primary text-blautech-primary hover:bg-blautech-primary hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-blautech-primary'
                }`}
              >
                <Phone size={16} />
                <span className="font-medium text-sm">Llamar</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-blautech-primary' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="py-4 space-y-2">
              {/* Menu Items */}
              {content.navigation.main.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-blautech-primary font-medium hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Contact Buttons Mobile */}
              <div className="px-4 py-2 border-t border-gray-200 mt-4 pt-4">
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${content.navigation.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle size={20} />
                    <span className="font-medium">Contactar por WhatsApp</span>
                  </a>
                  
                  <a
                    href={`tel:${content.navigation.contact.phone}`}
                    className="flex items-center space-x-3 w-full border-2 border-blautech-primary text-blautech-primary px-4 py-3 rounded-lg hover:bg-blautech-primary hover:text-white transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone size={20} />
                    <span className="font-medium">Llamar ahora</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
