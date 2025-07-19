import React from 'react';

interface HeroProps {
  content: any;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Efecto de partículas o patrón sutil (opcional) */}
      <div className="absolute inset-0 z-15 opacity-30">
        <div className="h-full w-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-30 devsnap-container text-center px-4">
        {/* Logo con animación */}
        <div className="flex items-center justify-center mb-8 fade-in-up">
          <img 
            src="/images/logo.png" 
            alt="DevSnap Logo" 
            className="h-20 w-auto filter drop-shadow-lg animate-float"
          />
        </div>
        
        <div className="max-w-4xl mx-auto fade-in-up stagger-1">
          <h1 className="text-base md:text-lg lg:text-2xl font-light text-white mb-4 leading-relaxed tracking-wide font-encode-sans">
            "Soluciones integrales para impulsar tu 
            <p>
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                transformación digital"
              </span>
            </p>
          </h1>
        </div>
      </div>
      
      {/* Scroll Indicator mejorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-pulse">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
