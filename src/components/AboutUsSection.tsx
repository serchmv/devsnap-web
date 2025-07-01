import React from 'react';

interface AboutUsSectionProps {
  content: any;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-devsnap-gray">
      <div className="devsnap-container">
        {/* Title */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="devsnap-title text-devsnap-primary">
            {content.aboutUs.title}
          </h2>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.aboutUs.stats.map((stat: any, index: number) => (
            <div 
              key={index}
              className={`text-center fade-in-up stagger-${index + 1}`}
            >
              <div className="devsnap-card hover:scale-105 transition-transform duration-300">
                {/* Stat Icon */}
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: stat.color }}
                >
                  <span className="text-3xl text-white">{stat.icon}</span>
                </div>
                
                {/* Stat Number */}
                <div className="mb-4">
                  <span 
                    className="text-4xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </span>
                </div>
                
                {/* Stat Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center fade-in-up stagger-4">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Somos una empresa líder en transformación digital con presencia en toda Latinoamérica. 
              Nuestro equipo de Solution Makers está dedicado a simplificar la adopción de tecnología 
              para las empresas más importantes de la región.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-devsnap-secondary rounded-full"></div>
                <span className="text-sm font-medium text-gray-600">Experiencia Comprobada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-devsnap-success rounded-full"></div>
                <span className="text-sm font-medium text-gray-600">Innovación Constante</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-devsnap-accent rounded-full"></div>
                <span className="text-sm font-medium text-gray-600">Resultados Medibles</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-devsnap-orange rounded-full"></div>
                <span className="text-sm font-medium text-gray-600">Alcance Regional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
