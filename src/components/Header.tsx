import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare } from 'lucide-react';

interface HeaderProps {
  content: any;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
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
                    isScrolled 
                      ? 'text-gray-800 hover:text-blue-600' 
                      : 'text-white hover:text-blue-400'
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
                  isScrolled
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    : 'text-white hover:text-green-400'
                }`}
                title="WhatsApp"
              >
                <MessageSquare size={24} />
              </button>
              
              <a
                href={`tel:${contactInfo.telefono}`}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white hover:text-blue-400'
                }`}
                title="Llamar"
              >
                <Phone size={24} />
              </a>
              
              <button
                onClick={() => setIsContactModalOpen(true)}
                className={`px-5 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
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
                  
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsContactModalOpen(true);
                    }}
                    className="flex items-center space-x-3 w-full py-2 text-gray-700 hover:text-purple-600"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-gray-950 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-800">
            {/* Header con logo */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <img 
                  src="/images/DS2.png" 
                  alt="DevSnap" 
                  className="h-8 w-auto mb-4"
                />
                <h3 className="text-xl font-light text-white">Solicita tu Demo</h3>
                <p className="text-sm text-gray-400 mt-2 font-light">
                  Descubre cómo nuestras soluciones de automatización pueden transformar tu negocio. 
                  Te enviaremos una demostración personalizada a tu correo.
                </p>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = {
                nombre: formData.get('nombre'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                timestamp: new Date().toISOString(),
                source: 'website_header'
              };
              
              try {
                // Enviar a n8n webhook
                const response = await fetch('https://automation.devsnap.com.mx/webhook/contact-form', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data)
                });
                
                if (response.ok) {
                  // Mostrar mensaje de éxito
                  setIsContactModalOpen(false);
                  // Aquí podrías agregar una notificación de éxito
                  alert('¡Gracias! Recibirás tu demo por correo pronto.');
                }
              } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error. Por favor intenta de nuevo.');
              }
            }} className="space-y-4 mt-6">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors font-light"
              />
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors font-light"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="+52 55 1234 5678"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors font-light"
              />
              
              {/* Botón minimalista */}
              <button
                type="submit"
                className="w-full group flex items-center justify-center space-x-3 py-3 text-white font-light hover:text-cyan-400 transition-all duration-300"
              >
                <span className="text-sm tracking-wider">SOLICITAR DEMO</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
            
            {/* Footer sutil */}
            <p className="text-xs text-gray-500 text-center mt-6 font-light">
              Al enviar tus datos aceptas recibir información sobre nuestras soluciones.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;