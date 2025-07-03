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
              {content.navigation.main.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => {
                    if (item.href === '#') {
                      // Scroll to top for inicio
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      // Use direct ID targeting for other sections
                      const targetId = item.href.replace('#', '');
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      } else if (targetId === 'contacto') {
                        // Fallback for footer
                        const footer = document.querySelector('footer');
                        if (footer) {
                          footer.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }
                  }}
                  className={`font-medium font-encode-sans transition-colors duration-300 hover:text-devsnap-secondary ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
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
                    ? 'bg-gradient-to-r from-devsnap-accent to-pink-500 text-white hover:from-devsnap-accent/90 hover:to-pink-500/90 shadow-lg hover:shadow-xl' 
                    : 'bg-gradient-to-r from-devsnap-accent to-pink-500 text-white hover:from-devsnap-accent/90 hover:to-pink-500/90 shadow-lg hover:shadow-xl'
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
          <div 
            className="fixed top-0 left-0 w-full h-full md:hidden" 
            style={{ 
              zIndex: 99998,
              position: 'fixed',
              margin: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
            onClick={() => setIsMobileMenuOpen(false)} 
          />
        )}

        {/* Mobile Menu */}
        <div 
          data-mobile-menu
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] transform transition-transform duration-300 ease-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ 
            zIndex: 99999,
            position: 'fixed',
            background: 'linear-gradient(135deg, #2C3E50 0%, #6C63FF 25%, #20B2AA 50%, #E91E63 75%, #2C3E50 100%) !important',
            backgroundImage: 'linear-gradient(135deg, #2C3E50 0%, #6C63FF 25%, #20B2AA 50%, #E91E63 75%, #2C3E50 100%) !important',
            backgroundColor: '#2C3E50 !important',
            borderLeft: '6px solid #FF9500 !important',
            boxShadow: '-15px 0 40px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.2) !important',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
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
                { label: 'INICIO', href: '#', icon: Home },
                { label: 'NOSOTROS', href: '#nosotros', icon: Users },
                { label: 'SERVICIOS', href: '#servicios', icon: Settings },
                { label: 'ESPECIALIDADES', href: '#especialidades', icon: Briefcase }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      
                      if (item.href === '#') {
                        // Scroll to top for inicio
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        // Use direct ID targeting for other sections
                        const targetId = item.href.replace('#', '');
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else if (targetId === 'contacto') {
                          // Fallback for footer
                          const footer = document.querySelector('footer');
                          if (footer) {
                            footer.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
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
                  className="w-14 h-14 bg-gradient-to-r from-devsnap-accent to-pink-500 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
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

        {/* Contact Popup - Mejorado */}
        {isContactPopupOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            style={{ 
              zIndex: 999999,
              position: 'fixed',
              margin: 0,
              padding: '16px'
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsContactPopupOpen(false);
              }
            }}
          >
            <div 
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-scale-up"
              style={{ 
                zIndex: 999999,
                position: 'relative',
                margin: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con gradiente */}
              <div className="bg-gradient-to-r from-devsnap-primary via-devsnap-secondary to-devsnap-success p-6 text-white relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-encode-sans">¡Conectemos!</h3>
                      <p className="text-sm text-white/90 font-encode-sans">Tu proyecto digital te espera</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsContactPopupOpen(false)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <X size={18} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Contenido del formulario */}
              <div className="p-6">
                {/* Mensaje de bienvenida */}
                <div className="mb-6 text-center">
                  <p className="text-gray-600 font-encode-sans leading-relaxed">
                    <strong className="text-devsnap-primary">¡Hola!</strong> Nos especializamos en transformación digital. 
                    Déjanos tus datos y te contactaremos en <strong className="text-devsnap-success">menos de 30 minutos</strong>.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-devsnap-secondary focus:border-devsnap-secondary transition-all duration-300 font-encode-sans placeholder:text-gray-400"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-devsnap-secondary focus:border-devsnap-secondary transition-all duration-300 font-encode-sans placeholder:text-gray-400"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-devsnap-secondary focus:border-devsnap-secondary transition-all duration-300 font-encode-sans placeholder:text-gray-400"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-devsnap-secondary to-devsnap-success text-white py-4 px-6 rounded-xl font-semibold hover:from-devsnap-secondary/90 hover:to-devsnap-success/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-encode-sans group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Enviar Información</span>
                  </button>
                </form>

                {/* Footer con garantías */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-center space-x-6 text-xs text-gray-600">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      Respuesta rápida
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                      100% confidencial
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                      Sin compromiso
                    </span>
                  </div>
                </div>
              </div>
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