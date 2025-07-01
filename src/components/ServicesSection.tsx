import React from 'react';

interface ServicesSectionProps {
  content: any;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-devsnap-primary">
      <div className="devsnap-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="devsnap-title text-white">
            {content.services.title}
          </h2>
        </div>
        
        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {content.services.categories.map((category: any, index: number) => (
            <div 
              key={index}
              className={`devsnap-card fade-in-up stagger-${index + 1}`}
            >
              {/* Service Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                {/* Hexagonal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-devsnap-secondary/80 to-devsnap-success/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-devsnap-secondary to-devsnap-success rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{category.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-devsnap-primary mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.services.map((service: string, serviceIndex: number) => (
                      <span 
                        key={serviceIndex}
                        className="px-3 py-1 bg-gradient-to-r from-devsnap-secondary/10 to-devsnap-success/10 text-devsnap-secondary text-sm rounded-full border border-devsnap-secondary/20 font-medium"
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
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.services.subtitle}
            </h3>
            <p className="text-white/90 text-lg mb-6">
              {content.services.description}
            </p>
            <a 
              href="#contacto" 
              className="devsnap-btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-devsnap-primary"
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
