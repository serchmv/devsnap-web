import React from 'react';
import { ArrowRight, Zap, Target, TrendingUp, MessageCircle } from 'lucide-react';

interface ServicesSectionProps {
  content: any;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  return (
    <section id="servicios" className="relative devsnap-section bg-[url('/images/fondosnap_1.svg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay sutil para el SVG */}
      <div className="absolute inset-0 backdrop-blur-[3px] z-0"></div>      
       <div className="absolute inset-0 backdrop-blur-[3px] z-0"></div> 
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-3xl md:text-3xl font-bold mb-4">
            <span className="text-white font-encode-sans">"Soluciones tecnológicas</span>
            <span className="text-black font-encode-sans"> avanzadas diseñadas para impulsar tu crecimiento"</span>
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {content.services.categories.map((category: any, index: number) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in-up stagger-${index + 1}`}
            >
              {/* Video Background */}
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  poster={category.image}
                >
                  <source src={`/videos/${index === 0 ? 'coding.mp4' : 'junta.mp4'}`} type="video/mp4" />
                  {/* Tu navegador no soporta el video. */}
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-devsnap-primary/80 via-devsnap-primary/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1 space-x-0">
                      <h3 className="text-xl font-bold text-white font-encode-sans">
                        {category.title}
                      </h3>
                      <p className="text-white  leading-relaxed font-encode-sans">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section - Transformación Digital Mejorada */}
        <div className="text-center fade-in-up stagger-3">
<div className="bg-white/75 rounded-2xl p-12 mx-auto shadow max-w-4xl backdrop-blur-[1px]">
  <h3 className="text-xl font-bold text-black font-encode-sans">
              Transformación Digital
            </h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light max-w-2xl mx-auto font-encode-sans">
              Revolucionamos tu forma de operar con tecnologías avanzadas, 
              optimizando procesos y creando nuevas oportunidades.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-devsnap-secondary/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-devsnap-secondary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 font-encode-sans">Eficiencia</h4>
                <p className="text-sm text-gray-600 text-center font-encode-sans">Automatización que reduce tiempos hasta 80%</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-devsnap-secondary/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Precisión</h4>
                <p className="text-sm text-gray-600 text-center">Decisiones basadas en datos reales</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-devsnap-secondary/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Crecimiento</h4>
                <p className="text-sm text-gray-600 text-center">Escalabilidad para el futuro</p>
              </div>
            </div>

           

            {/* Trust Indicator */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-black-500">
                ✅ Consulta inicial gratuita • 🚀 Resultados en 30 días • 🛡️ Garantía de satisfacción
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;