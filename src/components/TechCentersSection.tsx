import React from 'react';

interface TechCentersSectionProps {
  content: any;
}

const TechCentersSection: React.FC<TechCentersSectionProps> = ({ content }) => {
  return (
    <section className="blautech-section bg-blautech-primary">
      <div className="blautech-container">
        {/* Title */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="blautech-title text-white">
            {content.techCenters.title}
          </h2>
          <p className="text-white/90 text-lg">
            Nuestras oficinas estratégicamente ubicadas en América Central
          </p>
        </div>
        
        {/* Tech Centers Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {content.techCenters.locations.map((location: any, index: number) => (
            <div 
              key={index}
              className={`blautech-card fade-in-up stagger-${index + 1}`}
            >
              {/* Video Placeholder */}
              <div className="relative mb-6 rounded-lg overflow-hidden bg-gray-100 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blautech-secondary/20 to-blautech-success/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🏢</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blautech-primary mb-2">
                      Oficina {location.name}
                    </h3>
                    <div className="w-16 h-16 bg-blautech-secondary rounded-full mx-auto flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                  </div>
                </div>
                
                {/* Tech Elements Overlay */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-4 right-4 w-7 h-7 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Location Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blautech-primary mb-4">
                  Tech-Center {location.name}
                </h3>
                
                {/* Location Features */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blautech-secondary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xl">👥</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">Equipo Especializado</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blautech-success rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xl">🏢</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">Instalaciones Modernas</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blautech-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">Conectividad Global</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blautech-orange rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">Innovación 24/7</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 p-4 bg-blautech-gray rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Ubicación:</strong> {location.name === 'México' ? 'Ciudad de México, México' : 'Ciudad de Guatemala, Guatemala'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Especialidades:</strong> {location.name === 'México' ? 'DevSecOps, Cloud Solutions' : 'Digital Transformation, UX/UI'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center fade-in-up stagger-3">
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Presencia Regional Estratégica
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
              Nuestros Tech-Centers están estratégicamente ubicados para brindar 
              soporte cercano a nuestros clientes en toda la región, combinando 
              talento local con estándares globales de calidad.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <p className="text-white/80 text-sm">Tech-Centers Activos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <p className="text-white/80 text-sm">Soporte Continuo</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-white/80 text-sm">Conectividad Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCentersSection;
