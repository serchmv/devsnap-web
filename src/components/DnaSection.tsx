import React from 'react';

interface DnaSectionProps {
  content: any;
}

const DnaSection: React.FC<DnaSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-devsnap-gray">
      <div className="devsnap-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="devsnap-title text-devsnap-primary">
              {content.dna.title}
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos Solution Makers especializados en simplificar la adopción de tecnología 
                para empresas que buscan transformación digital efectiva.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {content.dna.features.map((feature: string, index: number) => (
                  <div 
                    key={index} 
                    className={`devsnap-card text-center py-6 fade-in-up stagger-${index + 1}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-devsnap-secondary to-devsnap-success rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {index === 0 && '🔗'}
                        {index === 1 && '🔄'}
                        {index === 2 && '🧠'}
                        {index === 3 && '⚡'}
                        {index === 4 && '🌐'}
                      </span>
                    </div>
                    <p className="font-semibold text-devsnap-primary text-sm">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* DNA Helix Visualization */}
              <div className="mt-8">
                <div className="relative">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-4 h-4 bg-devsnap-secondary rounded-full"></div>
                    <div className="w-6 h-6 bg-devsnap-success rounded-full"></div>
                    <div className="w-8 h-8 bg-devsnap-accent rounded-full"></div>
                    <div className="w-6 h-6 bg-devsnap-orange rounded-full"></div>
                    <div className="w-4 h-4 bg-devsnap-secondary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="w-6 h-6 bg-devsnap-orange rounded-full"></div>
                    <div className="w-4 h-4 bg-devsnap-accent rounded-full"></div>
                    <div className="w-6 h-6 bg-devsnap-secondary rounded-full"></div>
                    <div className="w-8 h-8 bg-devsnap-success rounded-full"></div>
                    <div className="w-4 h-4 bg-devsnap-accent rounded-full"></div>
                  </div>
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 100">
                    <path 
                      d="M50,25 Q200,10 350,25 Q200,40 50,55 Q200,70 350,55" 
                      stroke="#6C63FF" 
                      strokeWidth="2" 
                      fill="none" 
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="fade-in-up stagger-2">
            <div className="relative">
              <img 
                src={content.dna.image} 
                alt="Professional with DNA helix"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
                <span className="text-2xl">🧬</span>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-devsnap-secondary rounded-full shadow-lg flex items-center justify-center">
                <span className="text-white text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DnaSection;
