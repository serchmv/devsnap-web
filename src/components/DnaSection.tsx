import React from 'react';

interface DnaSectionProps {
  content: any;
}

const DnaSection: React.FC<DnaSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-devsnap-black">
      <div className="devsnap-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center" >
          {/* Content */}
          <div className="fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-black font-encode-sans mb-6">
                {content.dna.title}
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-black-700 leading-relaxed">
                Somos Solution Makers especializados en simplificar la adopción de tecnología 
                para empresas que buscan transformación digital efectiva.
              </p>
              {/* Features Grid */}
              
              
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
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
                <span className="text-5xl">🧬</span>
              </div>
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
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DnaSection;
