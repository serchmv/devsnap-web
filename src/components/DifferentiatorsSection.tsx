import React from 'react';

interface DifferentiatorsSectionProps {
  content: any;
}

const DifferentiatorsSection: React.FC<DifferentiatorsSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-white">
      <div className="devsnap-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in-up">
            <div className="relative">
              <img 
                src={content.differentiators.image} 
                alt="Professional businesswoman with laptop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Curved Arrow Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20" viewBox="0 0 200 200">
                  <path 
                    d="M50,100 Q100,50 150,100 Q100,150 50,100" 
                    stroke="#6C63FF" 
                    strokeWidth="3" 
                    fill="none"
                    strokeDasharray="10,5"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;15" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path 
                    d="M100,50 Q150,100 100,150 Q50,100 100,50" 
                    stroke="#20B2AA" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="8,4"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-devsnap-secondary to-devsnap-success rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-devsnap-accent rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-white text-lg">💡</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="fade-in-up stagger-1">
            <h2 className="devsnap-title text-devsnap-primary mb-8">
              {content.differentiators.title}
            </h2>
            
            <div className="space-y-8">
              {content.differentiators.features.map((feature: any, index: number) => (
                <div 
                  key={index}
                  className={`fade-in-up stagger-${index + 2}`}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                      style={{ backgroundColor: feature.color }}
                    ></div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold mb-3"
                        style={{ color: feature.color }}
                      >
                        • {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  {index < content.differentiators.features.length - 1 && (
                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Visual Elements */}
            <div className="mt-8 fade-in-up stagger-4">
              <div className="flex items-center justify-center space-x-8 p-6 bg-gradient-to-r from-devsnap-gray to-white rounded-lg">
                {content.differentiators.features.map((feature: any, index: number) => (
                  <div key={index} className="text-center">
                    <div 
                      className="w-8 h-8 rounded-full mx-auto mb-2 animate-pulse"
                      style={{ 
                        backgroundColor: feature.color,
                        animationDelay: `${index * 0.5}s`
                      }}
                    ></div>
                    <span className="text-xs font-medium text-gray-500">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 fade-in-up stagger-5">
              <a 
                href="#contacto" 
                className="devsnap-btn-primary"
              >
                DESCUBRE MÁS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
