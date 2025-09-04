import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare } from 'lucide-react';

interface HeaderProps {
  content: any;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const contactInfo = {
    telefono: '+525578470070',
    whatsapp: '+525578470070'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const mensaje = `Hola, me gustaría obtener información sobre los servicios de DevSnap.`;
    const numeroLimpio = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Especialidades', href: '#especialidades' }
  ];

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isCoursePage = typeof window !== 'undefined' && window.location.hash === '#curso-ia';
  const useLightTheme = !isScrolled || isCoursePage;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isCoursePage ? 'bg-transparent' : (isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent')
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/DS2.png" 
              alt="DevSnap" 
              className="h-8 w-auto"
            />
          </div>

          {/* Right side container */}
          <div className="flex items-center space-x-12">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    useLightTheme 
                      ? 'text-white hover:text-blue-400' 
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleWhatsApp}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  useLightTheme
                    ? 'text-white hover:text-green-400'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                title="WhatsApp"
              >
                <MessageSquare size={24} />
              </button>
              
              <a
                href={`tel:${contactInfo.telefono}`}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  useLightTheme
                    ? 'text-white hover:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                title="Llamar"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              useLightTheme ? 'text-white' : 'text-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-xl md:hidden overflow-y-auto">
            <div className="p-6">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center space-x-3 w-full py-2 text-gray-700 hover:text-green-600"
                  >
                    <MessageSquare size={20} />
                    <span>WhatsApp</span>
                  </button>
                  
                  <a
                    href={`tel:${contactInfo.telefono}`}
                    className="flex items-center space-x-3 w-full py-2 text-gray-700 hover:text-blue-600"
                  >
                    <Phone size={20} />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    
      
      {/* WhatsApp Option Modal - Se muestra después del login */}
      {false && ( // Cambiar a un estado como isWhatsAppModalOpen
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm">
          <div className="bg-gray-950 rounded-2xl p-6 shadow-2xl border border-gray-800">
            <h4 className="text-lg font-light text-white mb-4">¿También por WhatsApp?</h4>
            <p className="text-sm text-gray-400 mb-6">
              ¿Te gustaría recibir tu demo también por WhatsApp?
            </p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Sí, también WhatsApp
              </button>
              <button className="flex-1 border border-gray-700 text-gray-300 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Solo email
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;