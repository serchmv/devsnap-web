import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface WhatsAppWidgetDevSnapProps {
  position?: 'bottom-right' | 'bottom-left';
  showAfterSeconds?: number;
  customMessage?: string;
}

const WhatsAppWidgetDevSnap: React.FC<WhatsAppWidgetDevSnapProps> = ({
  position = 'bottom-right',
  showAfterSeconds = 5,
  customMessage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const contactInfo = {
    whatsapp: '+525578470070'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, showAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, [showAfterSeconds]);

  useEffect(() => {
    if (showNotification) {
      const hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      return () => clearTimeout(hideTimer);
    }
  }, [showNotification]);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  const handleSendMessage = () => {
    const mensaje = `¡Hola! Vi el demo de automatización en su sitio web y me gustaría obtener más información.

🎁 *Me interesa el demo personalizado de:*
• Automatización de procesos
• Inteligencia Artificial
• Desarrollo web
• Soluciones cloud

Por favor, envíenme la información a mi correo.

Gracias.`;

    const numeroLimpio = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Menu desplegable estilo popup */}
      {isOpen && (
        <div className="mb-4 bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 w-80 overflow-hidden animate-scale-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/DS2.png" 
                alt="DevSnap" 
                className="h-8 w-auto"
              />
              <h3 className="text-lg font-light text-white">¡Obtén tu Demo!</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>
          </div>

          {/* Contenido */}
          <div className="px-5 pb-5">
            <p className="text-sm text-gray-400 mb-5 text-center">
              Inicia sesión y recibe un demo personalizado de automatización
            </p>

            {/* Botón continuar con Google (simulado para WhatsApp) */}
            <button
              onClick={handleSendMessage}
              className="w-full bg-white text-gray-800 rounded-full py-2.5 px-4 flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors mb-4 text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continuar con Google</span>
            </button>

            {/* Benefits */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-sm">✓</span>
                <p className="text-gray-300 text-xs">Demo personalizado de automatización</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">✉️</span>
                <p className="text-gray-300 text-xs">Información exclusiva por email</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">🎯</span>
                <p className="text-gray-300 text-xs">Consultoría gratuita incluida</p>
              </div>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500 text-center italic">
              *Solo para empresas que buscan transformación digital. Sin spam, solo valor.
            </p>
          </div>
        </div>
      )}

      {/* Burbuja de notificación minimalista */}
      {showNotification && !isOpen && (
        <div className="absolute bottom-20 right-0 bg-gray-950 rounded-2xl shadow-2xl p-4 w-64 border border-gray-800 animate-scale-up">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-white mb-1 font-light">
                ¿Necesitas ayuda? 💬
              </p>
              <p className="text-xs text-gray-400">
                {customMessage || 'Estamos en línea para ayudarte'}
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-gray-500 hover:text-gray-300 ml-2"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      {/* Botón principal minimalista */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className={`group bg-gray-950 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 ${
          showNotification && !isOpen ? 'animate-pulse' : ''
        }`}
      >
        <MessageSquare className="h-6 w-6" />
        
        {/* Indicador de estado */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-950"></div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat con DevSnap
          <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -translate-y-1"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppWidgetDevSnap;