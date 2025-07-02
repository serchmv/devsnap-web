import React from 'react';

interface TechCentersSectionProps {
  content: any;
}

const TechCentersSection: React.FC<TechCentersSectionProps> = ({ content }) => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-devsnap-primary mb-4 font-encode-sans">
            Operación Digital Global
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-encode-sans">
            Trabajamos 100% remotamente con equipos distribuidos, brindando servicios de clase mundial desde cualquier ubicación
          </p>
        </div>
        
        {/* Remote Capabilities */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-devsnap-secondary to-devsnap-success rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🌐</span>
            </div>
            <h3 className="font-bold text-devsnap-primary mb-2 font-encode-sans">Alcance Global</h3>
            <p className="text-sm text-gray-600 font-encode-sans">Servicios sin fronteras geográficas</p>
          </div>
          
          <div className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-devsnap-success to-devsnap-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl">⚡</span>
            </div>
            <h3 className="font-bold text-devsnap-primary mb-2 font-encode-sans">Agilidad Digital</h3>
            <p className="text-sm text-gray-600 font-encode-sans">Respuesta rápida y adaptable</p>
          </div>
          
          <div className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-devsnap-accent to-devsnap-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h3 className="font-bold text-devsnap-primary mb-2 font-encode-sans">Seguridad Total</h3>
            <p className="text-sm text-gray-600 font-encode-sans">Protocolos de seguridad avanzados</p>
          </div>
        </div>

        {/* Digital Metrics */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-devsnap-primary mb-6 font-encode-sans">
            Modelo de Trabajo Digital
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-devsnap-secondary mb-1 font-encode-sans">24/7</div>
              <p className="text-xs text-gray-600 font-encode-sans">Disponibilidad</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-devsnap-success mb-1 font-encode-sans">100%</div>
              <p className="text-xs text-gray-600 font-encode-sans">Remoto</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-devsnap-accent mb-1 font-encode-sans">5+</div>
              <p className="text-xs text-gray-600 font-encode-sans">Zonas Horarias</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-devsnap-primary mb-1 font-encode-sans">∞</div>
              <p className="text-xs text-gray-600 font-encode-sans">Escalabilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCentersSection;
