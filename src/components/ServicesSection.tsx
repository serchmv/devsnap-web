import React from 'react';

interface ServicesSectionProps {
  content: any;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  return (
    <section className="relative devsnap-section font-encode-sans bg-gradient-to-br from-devsnap-primary via-devsnap-accent to-devsnap-success bg-[url('/images/fondosnap_1.svg')] bg-no-repeat bg-cover bg-center bg-blend-overlay">
      {/* Capa semitransparente para difuminar el fondo, opacidad baja */}
      <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-2xl md:text-3xl text-white font-encode-sans mb-6">
            {content.services.title}
          </h2>
        </div>
        
        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {content.services.categories.map((category: any, index: number) => (
            <div 
              key={index}
              className={`devsnap-card fade-in-up stagger-${index + 1} shadow-xl rounded-2xl border border-white/30 bg-white/80 backdrop-blur transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col gap-6`}
            >
              {/* Service Image */}
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-44 object-cover"
                />
                {/* Hexagonal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-devsnap-secondary/70 to-devsnap-success/70 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3 mx-auto shadow-md">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-devsnap-secondary to-devsnap-success rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-lg">{category.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-devsnap-primary mb-2 font-encode-sans">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed font-encode-sans">
                    {category.description}
                  </p>
                  
                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.services.map((service: string, serviceIndex: number) => (
                      <span 
                        key={serviceIndex}
                        className="px-3 py-1 bg-gradient-to-r from-devsnap-secondary/10 to-devsnap-success/10 text-devsnap-secondary text-sm rounded-full border border-devsnap-secondary/20 font-medium font-encode-sans hover:bg-devsnap-secondary/20 transition-colors"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="text-center fade-in-up stagger-3">
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-encode-sans">
              {content.services.subtitle}
            </h3>
            <p className="text-white/90 text-lg mb-6 font-encode-sans">
              {content.services.description}
            </p>
            <a 
              href="#contacto" 
              className="devsnap-btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-devsnap-primary font-encode-sans"
            >
              CONOCER MÁS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
