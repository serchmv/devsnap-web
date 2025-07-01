import React from 'react';

interface HeroProps {
  content: any;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${content.hero.backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 devsnap-hero-gradient" />
      
      {/* Technology Network Overlay */}
      <div className="absolute inset-0 z-20 tech-network-overlay" />
      <div className="absolute inset-0 z-20 tech-network-lines" />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-devsnap-secondary rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-devsnap-success rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-devsnap-accent rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-7 h-7 bg-devsnap-orange rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
        
        {/* Tech Icons */}
        <div className="absolute top-1/5 right-1/5 text-white opacity-30 text-2xl animate-pulse">💻</div>
        <div className="absolute bottom-1/5 left-1/5 text-white opacity-25 text-2xl animate-pulse" style={{ animationDelay: '2s' }}>🔗</div>
        <div className="absolute top-2/3 left-1/6 text-white opacity-20 text-2xl animate-pulse" style={{ animationDelay: '3s' }}>⚡</div>
        <div className="absolute top-1/6 left-2/3 text-white opacity-25 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🌐</div>
      </div>
      
      {/* Content */}
      <div className="relative z-30 devsnap-container text-center px-4">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-4 mb-8 fade-in-up">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 bg-devsnap-secondary rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-devsnap-secondary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-3xl font-bold text-white">DEVSNAP</span>
            <span className="text-sm font-light text-gray-300">SIMPLIFYING TECH</span>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight fade-in-up stagger-1">
          {content.hero.title}
        </h1>
        
        {/* CTA Button */}
        <div className="fade-in-up stagger-2">
          <a 
            href="#contacto" 
            className="devsnap-btn-primary inline-block"
          >
            CONTÁCTANOS
          </a>
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
