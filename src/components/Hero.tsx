import React from 'react';

interface HeroProps {
  content: any;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'blur(3px)' }}
        >
          <source src="\public\images\videofondo.mp4" type="video/mp4" />
          {/* Fallback image si el video no carga */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${content.hero.backgroundImage}')`,
            }}
          />
        </video>
      </div>
      
      {/* Light Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-30" />
      
      {/* Content */}
      <div className="relative z-30 devsnap-container text-center px-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 fade-in-up">
          <img 
            src="\public\images\logo.png" 
            alt="DevSnap Logo" 
            className="h-20 w-auto filter drop-shadow-lg"
          />
        </div>
        
        <div className="max-w-4xl mx-auto fade-in-up stagger-1">
          <h1 className="text-base md:text-lg lg:text-2xl font-light text-white mb-4 leading-relaxed tracking-wide font-encode-sans">
            "Soluciones integrales para impulsar tu 
            <p>
            <span className="font-semibold"> transformación digital"</span>

            </p>
          </h1>
          
          {/* Subtítulo opcional */}

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-white rounded-full opacity-60">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;