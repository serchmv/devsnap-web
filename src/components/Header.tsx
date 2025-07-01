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
  isScrolled
    ? 'bg-white/70 backdrop-blur-md shadow-lg'
    : 'bg-transparent'
}`}>
      <div className="devsnap-container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="\public\images\DS.png" 
              alt="DevSnap Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-encode-sans">
            {/* Menu Items - Sin ENG */}
            <div className="flex items-center space-x-6 font-encode-sans">
              {content.navigation.main
                .filter((item: any) => item.label !== 'ENG')
                .map((item: any, index: number) => (
                <a
  key={index}
  href={item.href}
  className={`font-medium font-encode-sans transition-colors duration-300 hover:text-devsnap-secondary ${
    isScrolled ? 'text-black' : 'text-white'
  }`}
>
  {item.label}
</a>
              ))}
            </div>

            {/* Contact Icons Only */}
            <div className="flex items-center space-x-3 ml-6 border-l border-gray-300 pl-6">
              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${content.navigation.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 group ${
                  isScrolled 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>

              {/* Phone Icon */}
              <a
                href={`tel:${content.navigation.contact.phone}`}
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 group ${
                  isScrolled 
                    ? 'border-devsnap-primary text-devsnap-primary hover:bg-devsnap-primary hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-devsnap-primary'
                }`}
                title="Llamar"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-devsnap-primary' : 'text-white'
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
              {/* Menu Items Mobile - Sin ENG */}
              {content.navigation.main
                .filter((item: any) => item.label !== 'ENG')
                .map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-devsnap-primary font-medium hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Contact Buttons Mobile */}
              <div className="px-4 py-2 border-t border-gray-200 mt-4 pt-4">
                <div className="flex space-x-3 justify-center">
                  <a
                    href={`https://wa.me/${content.navigation.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    title="WhatsApp"
                  >
                    <MessageCircle size={24} />
                  </a>
                  
                  <a
                    href={`tel:${content.navigation.contact.phone}`}
                    className="flex items-center justify-center w-14 h-14 border-2 border-devsnap-primary text-devsnap-primary rounded-full hover:bg-devsnap-primary hover:text-white transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    title="Llamar"
                  >
                    <Phone size={24} />
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