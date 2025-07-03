import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Home, Settings, Users, Mail, Briefcase, ChevronRight, Send } from 'lucide-react';

interface HeaderProps {
  content: any;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    whatsapp: ''
  });

  // Información de contacto DevSnap
  const contactInfo = {
    telefono: '+525578470070',
    whatsapp: '+525578470070'
  };

  // Función para WhatsApp con mensaje especializado DevSnap
  const handleWhatsApp = () => {
    const mensaje = `¡Hola! Me gustaría obtener información sobre los servicios de DevSnap.

💼 *Servicios de interés:*
🌐 Páginas Web
🤖 Inteligencia Artificial
⚙️ Automatización de Procesos (RPA)
☁️ Migración a la Nube
📈 Content Marketing & SEO
🔗 APIs & Microservicios
🛡️ Ciberseguridad

*¿Podrían brindarme más información?*

Gracias por su atención.`;

    const numeroLimpio = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envío del formulario
    console.log('Datos del formulario:', formData);
    
    // Cerrar popup y mostrar notificación
    setIsContactPopupOpen(false);
    setShowSuccessNotification(true);
    
    // Limpiar formulario
    setFormData({ nombre: '', correo: '', whatsapp: '' });
    
    // Ocultar notificación después de 5 segundos
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      const menuButton = document.querySelector('[data-menu-button]');
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(target) && 
          menuButton &&
          !menuButton.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
              src="/images/DS.png" 
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
              <button
                onClick={handleWhatsApp}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 group ${
                  isScrolled 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </button>

              {/* Phone Icon */}
              <a
                href={`tel:${contactInfo.telefono}`}
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 group ${
                  isScrolled 
                    ? 'border-devsnap-primary text-devsnap-primary hover:bg-devsnap-primary hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-devsnap-primary'
                }`}
                title="Llamar"
              >
                <Phone size={20} />
              </a>

              {/* Email Icon */}
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 group ${
                  isScrolled 
                    ? 'bg-gray-500 text-white hover:bg-gray-600' 
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
                title="Contacto"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-menu-button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-devsnap-primary' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" 
               onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div 
          data-mobile-menu
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="relative bg-gradient-to-br from-devsnap-primary via-devsnap-secondary to-devsnap-success p-4 text-white">
            <div className="flex items-center justify-between">
              {/* Logo SVG Centrado */}
              <div className="flex-1 flex justify-center">
                <div className="w-20 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <img
                    src="/images/DS.png"
                    alt="DevSnap Logo"
                    className="h-10 w-auto"
                  />
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <X size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto pb-6">
            {/* Navigation Items */}
            <nav className="space-y-2 p-4">
              {[
                { label: 'INICIO', href: '#inicio', icon: Home },
                { label: 'SERVICIOS', href: '#servicios', icon: Settings },
                { label: 'NOSOTROS', href: '#nosotros', icon: Users },
                { label: 'CONTÁCTANOS', href: '#contacto', icon: Mail },
                { label: 'CARRERAS', href: '#carreras', icon: Briefcase }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const element = document.getElementById(item.href.replace('#', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-devsnap-secondary/10 hover:to-devsnap-success/10 hover:shadow-md transition-all duration-300 w-full text-left"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-devsnap-secondary to-devsnap-success rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-gray-800 group-hover:text-devsnap-primary transition-colors duration-300 font-encode-sans">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight size={14} className="text-gray-400 group-hover:text-devsnap-secondary group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                );
              })}
            </nav>

            {/* Contact Section */}
            <div className="mx-4 mt-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 text-center font-encode-sans">Contacto Directo</h3>
              
              <div className="flex justify-center space-x-4">
                {/* Phone Button */}
                <a
                  href={`tel:${contactInfo.telefono}`}
                  className="w-14 h-14 bg-gradient-to-r from-devsnap-primary to-devsnap-secondary text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  onClick={() => setIsMobileMenuOpen(false)}
                  title="Llamar"
                >
                  <Phone size={20} />
                </a>

                {/* WhatsApp Button */}
                <button
                  onClick={() => {
                    handleWhatsApp();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  title="WhatsApp"
                >
                  <MessageCircle size={20} />
                </button>

                {/* Email Button */}
                <button
                  onClick={() => {
                    setIsContactPopupOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-14 h-14 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  title="Contacto"
                >
                  <Mail size={20} />
                </button>
              </div>
            </div>

            {/* Company Info */}
            <div className="mx-4 mt-6 p-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm font-bold text-gray-900 font-encode-sans">DevSnap</p>
                <p className="text-xs text-gray-600 mt-1 font-encode-sans">💻 Especialistas en Transformación Digital</p>
                <p className="text-xs text-gray-600 font-encode-sans">🚀 Soluciones Innovadoras</p>
                <p className="text-xs text-devsnap-secondary font-medium mt-2 font-encode-sans">✨ Solutions Makers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Popup */}
        {isContactPopupOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-devsnap-primary font-encode-sans">Contacto Rápido</h3>
                <button
                  onClick={() => setIsContactPopupOpen(false)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-encode-sans">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent font-encode-sans"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-encode-sans">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent font-encode-sans"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-encode-sans">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent font-encode-sans"
                    placeholder="+52 55 1234 5678"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-devsnap-secondary to-devsnap-success text-white py-3 px-6 rounded-lg font-medium hover:from-devsnap-secondary/90 hover:to-devsnap-success/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-encode-sans"
                >
                  <Send size={18} />
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success Notification */}
        {showSuccessNotification && (
          <div className="fixed top-4 right-4 z-50 max-w-sm">
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 animate-slide-in">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold font-encode-sans">¡Mensaje enviado!</p>
                <p className="text-sm text-green-100 font-encode-sans">Pronto uno de nuestros asesores te contactará</p>
              </div>
              <button
                onClick={() => setShowSuccessNotification(false)}
                className="w-5 h-5 text-white/70 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;