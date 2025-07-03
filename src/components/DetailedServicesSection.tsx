import React from 'react';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from './common/OptimizedImage';

interface DetailedServicesSectionProps {
  content: any;
}

const DetailedServicesSection: React.FC<DetailedServicesSectionProps> = ({ content }) => {
  const detailedServices = content.services.categories.find((cat: any) => cat.title === "Servicios Digitales")?.detailedServices;

  if (!detailedServices) return null;

  // Mapeo de servicios a sus rutas correspondientes (basado en App.tsx)
  const getServiceRoute = (serviceName: string): string => {
    const routeMap: { [key: string]: string } = {
      "Inteligencia Artificial & Machine Learning": "#ia-machine-learning",
      "Automatización de Procesos (RPA)": "#automatizacion-rpa", 
      "Migración a la Nube": "#cloud-migration",
      "Content Marketing & SEO": "#content-marketing",
      "Desarrollo de APIs & Microservicios": "#apis-microservicios",
      "Ciberseguridad & DevSecOps": "#ciberseguridad"
    };
    return routeMap[serviceName] || "#";
  };

  const handleServiceClick = (serviceName: string) => {
    const route = getServiceRoute(serviceName);
    if (route !== "#") {
      // Navegar a la página del servicio
      window.location.hash = route;
      // Scroll suave al top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section id="especialidades" className="devsnap-section bg-gradient-to-br from-gray-50 to-white">
      <div className="devsnap-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="devsnap-title text-devsnap-primary mb-4 font-encode-sans">
            Especialidades Tecnológicas
          </h2>
          <p className="text-xl text-devsnap-secondary font-medium mb-6 font-encode-sans">
            Soluciones integrales para impulsar tu transformación digital
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed font-encode-sans">
            Nuestro equipo de expertos desarrolla e implementa tecnologías de vanguardia adaptadas a las necesidades específicas de tu industria.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {detailedServices.services.map((service: any, index: number) => {
            const serviceImage = `/images/services/${index + 1}.jpg`;
            
            return (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-devsnap-secondary/20 fade-in-up flex flex-col h-full"
            >
              {/* Service Image with Blur Effect */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-60 relative">
                  <img
                    src={serviceImage}
                    alt={service.name}
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105 filter blur-[0.5px] group-hover:blur-none"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <span class="text-lg text-gray-400">📋</span>
                              </div>
                              <p class="text-xs text-gray-400">${service.name}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  
                  {/* Número del servicio minimalista */}
                  
                </div>
              </div>

              {/* Service Content */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-devsnap-primary mb-3 font-encode-sans">
                  {service.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Ver más button - Minimalista */}
                <div className="mt-auto">
                  <button 
                    onClick={() => handleServiceClick(service.name)}
                    className="group inline-flex items-center text-sm text-devsnap-primary hover:text-devsnap-secondary transition-colors duration-300 font-medium"
                  >
                    <span>Ver más</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>

                       {/* Technology Badges */}
        <div className="mt-16 text-center fade-in-up stagger-8">
          <h4 className="text-lg font-semibold text-devsnap-primary mb-6 uppercase tracking-wide font-encode-sans">
            Tecnologías y Plataformas Especializadas
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { 
                logo: "/images/tech-logos/aws-logo.png",
                color: "from-orange-400 to-orange-600",
                shortName: "AWS"
              },
              { 
                logo: "/images/tech-logos/azure-logo.png",
                color: "from-blue-400 to-blue-600",
                shortName: "Azure"
              },
              { 
                logo: "/images/tech-logos/react-logo.jpg",
                color: "from-cyan-400 to-cyan-600",
                shortName: "React"
              },
              { 
                logo: "/images/tech-logos/python-logo.png",
                color: "from-green-400 to-green-600",
                shortName: "Python"
              },
              { 
                logo: "/images/tech-logos/tensorflow-logo.png",
                color: "from-purple-400 to-purple-600",
                shortName: "TensorFlow"
              },
              { 
                logo: "/images/tech-logos/docker-logo.png",
                color: "from-blue-500 to-indigo-600",
                shortName: "Docker"
              },
              { 
                logo: "/images/tech-logos/kubernetes-logo.png",
                color: "from-indigo-400 to-indigo-600",
                shortName: "Kubernetes"
              },
              { 
                logo: "/images/tech-logos/mongodb-logo.png",
                color: "from-green-500 to-green-700",
                shortName: "MongoDB"
              }
            ].map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-devsnap-secondary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Logo Container */}
                <div className="relative flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-2 group-hover:bg-white transition-colors duration-300">
                    <img 
                      src={tech.logo} 
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
                    <p className="text-sm font-bold text-devsnap-primary group-hover:text-devsnap-secondary transition-colors duration-300 font-encode-sans">
                      {tech.shortName}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-encode-sans">
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
            <p className="text-gray-600 text-sm max-w-2xl mx-auto font-encode-sans">
              Trabajamos con las tecnologías más avanzadas del mercado para garantizar soluciones robustas, escalables y de vanguardia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;