import React from 'react';

interface ServicesSectionProps {
  content: any;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  return (
    <section className="relative devsnap-section bg-[url('/images/fondosnap_1.svg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay sutil para el SVG */}
<div className="absolute inset-0 backdrop-blur-[3px] z-0"></div>      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-3xl md:text-3xl font-bold mb-4">
            <span className="text-white font-encode-sans">"Soluciones tecnológicas</span>
            <span className="text-black font-encode-sans"> avanzadas diseñadas para impulsar tu crecimiento"</span>
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {content.services.categories.map((category: any, index: number) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in-up stagger-${index + 1}`}
            >
              {/* Video Background */}
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  poster={category.image}
                >
                  <source src={`/videos/${index === 0 ? 'coding.mp4' : 'junta.mp4'}`} type="video/mp4" />
                  {/* Tu navegador no soporta el video. */}
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-devsnap-primary/80 via-devsnap-primary/40 to-transparent"></div>
                
                
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start space-x-4">
                   
                    <div className="flex-1 space-x-0">
                      <h3 className="text-xl font-bold text-white  font-encode-sans">
                        {category.title}
                      </h3>
                      <p className="text-black font-bold leading-relaxed font-encode-sans">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
             
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="text-center fade-in-up stagger-3">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-devsnap-primary mb-4">
              TRANSFORMACIÓN DE NEGOCIOS
            </h3>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Implementamos tecnologías avanzadas que revolucionan la forma en que operates, 
              optimizando procesos y creando nuevas oportunidades de crecimiento.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="px-8 py-4 bg-gradient-to-r from-devsnap-secondary to-devsnap-success text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                INICIAR TRANSFORMACIÓN
              </a>
              <a 
                href="#servicios" 
                className="px-8 py-4 border-2 border-devsnap-primary text-devsnap-primary rounded-2xl font-semibold transition-all duration-300 hover:bg-devsnap-primary hover:text-white"
              >
                VER TODOS LOS SERVICIOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;