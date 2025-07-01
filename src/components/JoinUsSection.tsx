import React from 'react';

interface JoinUsSectionProps {
  content: any;
}

const JoinUsSection: React.FC<JoinUsSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-white">
      <div className="devsnap-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="devsnap-title text-devsnap-primary">
              {content.joinUs.title}
            </h2>
            
            <div className="mb-8">
              <p className="text-2xl font-semibold text-devsnap-secondary mb-4">
                {content.joinUs.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Buscamos profesionales apasionados por la tecnología que quieran formar parte 
                de un equipo dinámico y hacer la diferencia en la transformación digital de 
                las empresas más importantes de Latinoamérica.
              </p>
            </div>
            
            {/* Benefits */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-devsnap-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-devsnap-primary mb-2">Crecimiento Profesional</h4>
                  <p className="text-gray-600">Desarrolla tu carrera en un ambiente de innovación constante</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-devsnap-success rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌎</span>
                </div>
                <div>
                  <h4 className="font-semibold text-devsnap-primary mb-2">Alcance Internacional</h4>
                  <p className="text-gray-600">Trabaja en proyectos que impactan +15 países de América</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-devsnap-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-devsnap-primary mb-2">Tecnología de Vanguardia</h4>
                  <p className="text-gray-600">Utiliza las últimas tecnologías y metodologías ágiles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-devsnap-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-devsnap-primary mb-2">Equipo Colaborativo</h4>
                  <p className="text-gray-600">Únete a más de 185 Solution Makers talentosos</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="fade-in-up stagger-2">
              <a 
                href="#carreras" 
                className="devsnap-btn-primary mr-4"
              >
                {content.joinUs.cta}
              </a>
              <a 
                href="#contacto" 
                className="devsnap-btn-secondary"
              >
                MÁS INFORMACIÓN
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="fade-in-up stagger-1">
            <div className="relative">
              <img 
                src={content.joinUs.image} 
                alt="Team of professional women"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-devsnap-primary/10 rounded-lg"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-devsnap-secondary">185+</div>
                  <div className="text-xs text-gray-600">Solution Makers</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-devsnap-success">15+</div>
                  <div className="text-xs text-gray-600">Países</div>
                </div>
              </div>
              
              {/* Career Icons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 space-y-3">
                <div className="w-8 h-8 bg-devsnap-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-sm">👩‍💻</span>
                </div>
                <div className="w-8 h-8 bg-devsnap-success rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="text-white text-sm">👨‍💻</span>
                </div>
                <div className="w-8 h-8 bg-devsnap-accent rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                  <span className="text-white text-sm">🧑‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
