import React from 'react';

interface ModernizationSectionProps {
  content: any;
}

const ModernizationSection: React.FC<ModernizationSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-white">
      <div className="devsnap-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="devsnap-title text-devsnap-primary mb-8">
              {content.modernization.title}
            </h2>
            
            <div className="space-y-8">
              {content.modernization.categories.map((category: any, index: number) => (
                <div 
                  key={index}
                  className={`devsnap-card border-l-4 ${
                    index === 0 
                      ? 'border-devsnap-secondary bg-gradient-to-r from-devsnap-secondary/5 to-transparent' 
                      : 'border-devsnap-success bg-gradient-to-r from-devsnap-success/5 to-transparent'
                  } fade-in-up stagger-${index + 1}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-devsnap-secondary' : 'bg-devsnap-success'
                    }`}>
                      <span className="text-white text-xl">
                        {index === 0 ? '🚀' : '⚙️'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-devsnap-primary mb-4">
                        {category.title}
                      </h3>
                      
                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {category.services.map((service: string, serviceIndex: number) => (
                          <div 
                            key={serviceIndex}
                            className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                          >
                            <div className={`w-2 h-2 rounded-full ${
                              index === 0 ? 'bg-devsnap-secondary' : 'bg-devsnap-success'
                            }`}></div>
                            <span className="text-sm font-medium text-gray-700">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 fade-in-up stagger-3">
              <a 
                href="#contacto" 
                className="devsnap-btn-primary"
              >
                MODERNIZAR AHORA
              </a>
            </div>
          </div>
          
          {/* Image with Network Visualization */}
          <div className="fade-in-up stagger-2">
            <div className="relative">
              <img 
                src={content.modernization.image} 
                alt="Cloud Computing and Network"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Network Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-devsnap-secondary/10 to-devsnap-success/20 rounded-lg">
                {/* Floating Connection Points */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-devsnap-secondary rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-devsnap-success rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-devsnap-accent rounded-full shadow-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-devsnap-orange rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                  <path 
                    d="M100,75 Q200,100 300,100 M100,100 Q200,75 300,225 M100,225 Q200,200 300,75" 
                    stroke="#6C63FF" 
                    strokeWidth="1" 
                    fill="none" 
                    opacity="0.3"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
                <span className="text-2xl">☁️</span>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-devsnap-success rounded-full shadow-lg flex items-center justify-center">
                <span className="text-white text-xl">🔧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernizationSection;
