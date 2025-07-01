import React, { useState } from 'react';

interface DetailedServicesSectionProps {
  content: any;
}

const DetailedServicesSection: React.FC<DetailedServicesSectionProps> = ({ content }) => {
  const [activeService, setActiveService] = useState(0);
  const detailedServices = content.services.categories.find((cat: any) => cat.title === "Servicios Digitales")?.detailedServices;

  if (!detailedServices) return null;

  return (
    <section className="blautech-section bg-gradient-to-br from-gray-50 to-white">
      <div className="blautech-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="blautech-title text-blautech-primary mb-4">
            Especialidades Tecnológicas
          </h2>
          <p className="text-xl text-blautech-secondary font-medium mb-6">
            Soluciones integrales para impulsar tu transformación digital
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Nuestro equipo de expertos desarrolla e implementa tecnologías de vanguardia adaptadas a las necesidades específicas de tu industria.
          </p>
          
          {/* More Info Button */}
          <a 
            href="#especialidades" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blautech-secondary to-blautech-success text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>Más información</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {detailedServices.services.map((service: any, index: number) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blautech-secondary/20 fade-in-up stagger-${index + 1} flex flex-col h-full`}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl text-white">{service.icon}</span>
                </div>
                
                {/* Floating particles animation */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blautech-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blautech-success rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
              </div>

              {/* Service Content */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-blautech-primary mb-4 group-hover:text-blautech-secondary transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Examples */}
                <div className="space-y-2 mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-blautech-secondary mb-3 uppercase tracking-wide">
                    Casos de Uso:
                  </h4>
                  <div className="space-y-2">
                    {service.examples.map((example: string, exampleIndex: number) => (
                      <div 
                        key={exampleIndex}
                        className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${exampleIndex * 50}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} opacity-70`}></div>
                        <span className="text-sm text-gray-700 font-medium">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ver más button */}
                <div className="mt-auto">
                  <a 
                    href={service.url}
                    className={`inline-flex items-center space-x-2 w-full justify-center px-4 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <span>Ver más detalles</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                style={{ background: `linear-gradient(135deg, transparent 0%, transparent 99%, var(--gradient-color) 100%)` }}>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up stagger-7">
          <div className="bg-gradient-to-r from-blautech-primary to-blautech-secondary rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para Transformar tu Empresa?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Nuestros Solution Makers están listos para diseñar la estrategia tecnológica perfecta para tu organización.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#contacto" 
                  className="bg-white text-blautech-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  SOLICITAR CONSULTORÍA GRATUITA
                </a>
                <a 
                  href="#casos-exito" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blautech-primary transition-all duration-300"
                >
                  VER CASOS DE ÉXITO
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Badges */}
        <div className="mt-16 text-center fade-in-up stagger-8">
          <h4 className="text-lg font-semibold text-blautech-primary mb-6 uppercase tracking-wide">
            Tecnologías y Plataformas Especializadas
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { 
                name: "Amazon Web Services", 
                logo: "/images/tech-logos/aws-logo.png",
                color: "from-orange-400 to-orange-600",
                shortName: "AWS"
              },
              { 
                name: "Microsoft Azure", 
                logo: "/images/tech-logos/azure-logo.png",
                color: "from-blue-400 to-blue-600",
                shortName: "Azure"
              },
              { 
                name: "React", 
                logo: "/images/tech-logos/react-logo.jpg",
                color: "from-cyan-400 to-cyan-600",
                shortName: "React"
              },
              { 
                name: "Python", 
                logo: "/images/tech-logos/python-logo.png",
                color: "from-green-400 to-green-600",
                shortName: "Python"
              },
              { 
                name: "TensorFlow", 
                logo: "/images/tech-logos/tensorflow-logo.png",
                color: "from-purple-400 to-purple-600",
                shortName: "TensorFlow"
              },
              { 
                name: "Docker", 
                logo: "/images/tech-logos/docker-logo.png",
                color: "from-blue-500 to-indigo-600",
                shortName: "Docker"
              },
              { 
                name: "Kubernetes", 
                logo: "/images/tech-logos/kubernetes-logo.png",
                color: "from-indigo-400 to-indigo-600",
                shortName: "Kubernetes"
              },
              { 
                name: "MongoDB", 
                logo: "/images/tech-logos/mongodb-logo.png",
                color: "from-green-500 to-green-700",
                shortName: "MongoDB"
              }
            ].map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blautech-secondary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Logo Container */}
                <div className="relative flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-2 group-hover:bg-white transition-colors duration-300">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-md transition-all duration-300"
                      onError={(e) => {
                        // Fallback si la imagen no carga
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xl font-bold text-gray-600">${tech.shortName}</span>`;
                        }
                      }}
                    />
                  </div>
                  
                  {/* Tech Name */}
                  <div className="text-center">
                    <p className="text-sm font-bold text-blautech-primary group-hover:text-blautech-secondary transition-colors duration-300">
                      {tech.shortName}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Trabajamos con las tecnologías más avanzadas del mercado para garantizar soluciones robustas, escalables y de vanguardia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
