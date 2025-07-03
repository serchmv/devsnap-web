import React from 'react';

interface TechCentersSectionProps {
  content: any;
}

const TechCentersSection: React.FC<TechCentersSectionProps> = ({ content }) => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-[url('/images/oficinas.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Enhanced Blurred overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/10 to-gray-100/75 backdrop-blur-[1px] z-0" />
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header - Más compacto */}
        <div className="text-center mb-10 fade-in-up">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-3 font-encode-sans">
            Operación Digital Global
          </h2>
          <p className="text-sm text-gray-1000 max-w-xl mx-auto font-encode-sans">
            Trabajamos 100% remotamente con equipos distribuidos, brindando servicios de clase mundial desde cualquier ubicación
          </p>
        </div>
        
        {/* Remote Capabilities - Más compactas */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="group text-center bg-white/60 rounded-xl p-4 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-500 backdrop-blur-[1px] border border-white/20">
            <div className="w-10 h-10 bg-gradient-to-br from-devsnap-secondary to-devsnap-success rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg">🌐</span>
            </div>
            <h3 className="font-semibold text-black mb-1 font-encode-sans text-sm">Alcance Global</h3>
            <p className="text-xs text-gray-800 font-encode-sans">Servicios sin fronteras geográficas</p>
          </div>
          
          <div className="group text-center bg-white/60 rounded-xl p-4 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-500 backdrop-blur-[1px] border border-white/20">
            <div className="w-10 h-10 bg-gradient-to-br from-devsnap-success to-devsnap-accent rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg">⚡</span>
            </div>
            <h3 className="font-semibold text-black mb-1 font-encode-sans text-sm">Agilidad Digital</h3>
            <p className="text-xs text-gray-800 font-encode-sans">Respuesta rápida y adaptable</p>
          </div>
          
          <div className="group text-center bg-white/60 rounded-xl p-4 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-500 backdrop-blur-[1px] border border-white/20">
            <div className="w-10 h-10 bg-gradient-to-br from-devsnap-accent to-devsnap-primary rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg">🔒</span>
            </div>
            <h3 className="font-semibold text-black mb-1 font-encode-sans text-sm">Seguridad Total</h3>
            <p className="text-xs text-gray-800 font-encode-sans">Protocolos de seguridad avanzados</p>
          </div>
        </div>

        {/* Digital Metrics - Más compacto */}
          <div className="group text-center bg-white/60 rounded-xl p-4 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-500 backdrop-blur-[1px] border border-white/20">
          <h3 className="text-base font-semibold text-black mb-4 font-encode-sans">
            Modelo de Trabajo Digital
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center group">
              <div className="text-xl font-bold text-devsnap-secondary mb-1 font-encode-sans group-hover:scale-110 transition-transform duration-300">24/7</div>
              <p className="text-xs text-gray-1000 font-encode-sans">Disponibilidad</p>
            </div>
            <div className="text-center group">
              <div className="text-xl font-bold text-devsnap-success mb-1 font-encode-sans group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-xs text-gray-1000 font-encode-sans">Remoto</p>
            </div>
            <div className="text-center group">
              <div className="text-xl font-bold text-devsnap-accent mb-1 font-encode-sans group-hover:scale-110 transition-transform duration-300">5+</div>
              <p className="text-xs text-gray-1000 font-encode-sans">Zonas Horarias</p>
            </div>
            <div className="text-center group">
              <div className="text-xl font-bold text-devsnap-primary mb-1 font-encode-sans group-hover:scale-110 transition-transform duration-300">∞</div>
              <p className="text-xs text-gray-1000 font-encode-sans">Escalabilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCentersSection;
