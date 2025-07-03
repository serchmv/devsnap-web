import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Globe, Zap, Shield, Code, Brain, Cloud } from 'lucide-react';

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

  // Información de contacto DevSnap
  const contactInfo = {
    whatsapp: '+525578470070'
  };

  // Mostrar notificación después del tiempo especificado
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, showAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, [showAfterSeconds]);

  // Ocultar notificación después de 10 segundos
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

  // Opciones específicas de DevSnap
  const opcionesDevSnap = [
    {
      id: 'web',
      titulo: 'Páginas Web',
      descripcion: 'Sitios modernos y responsivos',
      icono: <Globe className="h-5 w-5" />,
      color: 'blue',
      mensaje: `¡Hola! Estoy interesado en desarrollar una página web profesional. 

🌐 *Me gustaría información sobre:*
• Sitios web corporativos
• Tiendas en línea (e-commerce)
• Aplicaciones web personalizadas
• Diseño responsive y moderno

¿Podrían brindarme más detalles sobre sus servicios web?

Gracias.`
    },
    {
      id: 'ia',
      titulo: 'Inteligencia Artificial',
      descripcion: 'Soluciones con IA/ML',
      icono: <Brain className="h-5 w-5" />,
      color: 'purple',
      mensaje: `¡Hola! Me interesa implementar Inteligencia Artificial en mi empresa.

🧠 *Servicios de IA que me interesan:*
• Automatización con Machine Learning
• Chatbots inteligentes
• Análisis predictivo de datos
• Procesamiento de lenguaje natural

¿Podrían ayudarme a entender cómo la IA puede beneficiar mi negocio?

Gracias.`
    },
    {
      id: 'cloud',
      titulo: 'Migración Cloud',
      descripcion: 'AWS, Azure, GCP',
      icono: <Cloud className="h-5 w-5" />,
      color: 'cyan',
      mensaje: `¡Hola! Necesito migrar mi infraestructura a la nube.

☁️ *Servicios en la nube de interés:*
• Migración a AWS/Azure/GCP
• Arquitectura cloud nativa
• Optimización de costos
• Seguridad y backup en la nube

¿Pueden asesorarme sobre la mejor estrategia de migración?

Gracias.`
    },
    {
      id: 'seguridad',
      titulo: 'Ciberseguridad',
      descripcion: 'Protección empresarial',
      icono: <Shield className="h-5 w-5" />,
      color: 'red',
      mensaje: `¡Hola! Requiero fortalecer la ciberseguridad de mi empresa.

🛡️ *Servicios de seguridad necesarios:*
• Auditorías de seguridad
• Implementación de DevSecOps
• Protección contra amenazas
• Cumplimiento normativo

¿Podrían evaluar mi situación actual de seguridad?

Gracias.`
    },
    {
      id: 'desarrollo',
      titulo: 'Desarrollo Custom',
      descripcion: 'Software a medida',
      icono: <Code className="h-5 w-5" />,
      color: 'green',
      mensaje: `¡Hola! Necesito desarrollo de software personalizado.

💻 *Desarrollo que requiero:*
• Aplicaciones web personalizadas
• APIs y microservicios
• Integración de sistemas
• Automatización de procesos (RPA)

¿Pueden ayudarme a materializar mi idea?

Gracias.`
    },
    {
      id: 'general',
      titulo: 'Asesoría General',
      descripcion: 'Consulta gratuita',
      icono: <Zap className="h-5 w-5" />,
      color: 'orange',
      mensaje: `¡Hola! Me gustaría obtener información sobre los servicios de DevSnap.

💼 *Servicios de interés:*
🌐 Páginas Web
🤖 Inteligencia Artificial
⚙️ Automatización de Procesos (RPA)
☁️ Migración a la Nube
📈 Content Marketing & SEO
🔗 APIs & Microservicios
🛡️ Ciberseguridad

*¿Podrían brindarme más información?*

Gracias por su atención.`
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      cyan: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200',
      red: 'bg-red-100 text-red-600 hover:bg-red-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const handleOptionClick = (opcion: any) => {
    const numeroLimpio = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(opcion.mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsOpen(false);
    setShowNotification(false);
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Menu desplegable */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl shadow-2xl border border-gray-200 w-80 overflow-hidden animate-scale-up">
          {/* Header DevSnap */}
          <div className="bg-gradient-to-r from-devsnap-primary via-devsnap-secondary to-devsnap-success text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <img 
                    src="/images/DS.png" 
                    alt="DevSnap Logo" 
                    className="h-8 w-auto"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-encode-sans">DevSnap</h3>
                  <p className="text-xs text-white/90 font-encode-sans">Solutions Makers</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mensaje de bienvenida */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <p className="text-sm text-gray-800 font-encode-sans">
              <strong>¡Hola!</strong> Convertimos ideas en soluciones digitales innovadoras.
            </p>
            <p className="text-xs text-gray-600 mt-1 font-encode-sans">
              ¿En qué podemos ayudarte hoy?
            </p>
          </div>

          {/* Opciones de DevSnap */}
          <div className="p-2 max-h-80 overflow-y-auto">
            {opcionesDevSnap.map((opcion) => (
              <button
                key={opcion.id}
                onClick={() => handleOptionClick(opcion)}
                className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200 text-left group"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${getColorClasses(opcion.color)}`}>
                  {opcion.icono}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm font-encode-sans">{opcion.titulo}</h4>
                  <p className="text-xs text-gray-600 font-encode-sans">{opcion.descripcion}</p>
                </div>
                <div className="text-gray-400 group-hover:text-devsnap-secondary transition-colors duration-200">
                  <MessageCircle className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Footer con garantías */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 text-center border-t">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-600 mb-2 font-encode-sans">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                Respuesta inmediata
              </span>
             
            </div>
            <p className="text-xs text-devsnap-success font-semibold font-encode-sans">
              ⚡ Consulta gratuita disponible
            </p>
          </div>
        </div>
      )}

      {/* Burbuja de notificación */}
      {showNotification && !isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-200 animate-scale-up">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-sm mb-1 font-encode-sans">¡Transformación Digital! 👋</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-encode-sans">
                {customMessage || '¿Listo para digitalizar tu empresa? Nuestros especialistas están en línea para ayudarte ahora'}
              </p>
              <div className="flex items-center mt-2 text-xs text-green-600 font-encode-sans">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                <span>En línea ahora</span>
              </div>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {/* Flecha indicadora */}
          <div className="absolute bottom-2 right-8 w-3 h-3 bg-white border-b border-r border-gray-200 transform rotate-45 translate-y-1/2"></div>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className={`group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          showNotification && !isOpen ? 'animate-pulse' : ''
        }`}
      >
        <MessageCircle className="h-7 w-7" />
        
        {/* Indicador de notificación */}
        {showNotification && !isOpen && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce font-bold">
            !
          </div>
        )}

        {/* Indicador de estado DevSnap */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>

        {/* Tooltip especializado */}
        <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-encode-sans">
          Transformación Digital DevSnap
          <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -translate-y-1"></div>
        </div>

        {/* Badge DevSnap */}
        <div className="absolute -bottom-1 -left-2 bg-gradient-to-r from-devsnap-primary to-devsnap-secondary text-white text-xs px-2 py-1 rounded-full font-bold transform -rotate-12 font-encode-sans">
          DS
        </div>
      </button>
    </div>
  );
};

export default WhatsAppWidgetDevSnap;