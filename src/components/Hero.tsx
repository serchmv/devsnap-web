import React, { useEffect, useRef } from 'react';

// CSS de animaciones inline
const animationStyles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out forwards;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  .animation-delay-600 {
    animation-delay: 600ms;
  }

  .animation-delay-800 {
    animation-delay: 800ms;
  }
`;

interface HeroProps {
  content: any;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Inyectar estilos de animación
    const styleEl = document.createElement('style');
    styleEl.textContent = animationStyles;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particles configuration
    const particlesArray: any[] = [];
    const numberOfParticles = 80;
    const connectionDistance = 150;
    const mouseRadius = 100;
    
    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };

    // Mouse movement
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseRadius - distance) / mouseRadius;
            const directionX = forceDirectionX * force * 2;
            const directionY = forceDirectionY * force * 2;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    // Connect particles
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 0.3})`; // blue-300 with opacity
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background - Cambio a tonos más oscuros */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-zinc-900" />
      
      {/* Animated Canvas with blur */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10"
        style={{ filter: 'blur(1px)' }}
      />
      
      {/* Content */}
      <div className="relative z-30 devsnap-container text-center px-4">
        {/* Logo con animación */}
        <div className="flex items-center justify-center mb-8 fade-in-up">
          <img 
            src="/images/logo3.png" 
            alt="DevSnap Logo" 
            className="h-32 w-auto filter drop-shadow-lg animate-float"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Texto animado con typewriter effect */}
          <div className="overflow-hidden">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-thin text-white mb-4 leading-tight tracking-tight">
              <span className="block opacity-0 animate-fade-in-up">Soluciones integrales</span>
              <span className="block opacity-0 animate-fade-in-up animation-delay-200">para impulsar tu</span>
              <span className="block mt-2">
                <span className="font-normal bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent opacity-0 animate-fade-in-up animation-delay-400">
                  transformación digital
                </span>
              </span>
            </h1>
          </div>
          
          {/* Subtítulo animado */}
          <p className="text-sm md:text-base text-gray-300/80 mb-10 opacity-0 animate-fade-in-up animation-delay-600 font-light">
            Tecnología de vanguardia para empresas del futuro
          </p>
          
          {/* CTA Button - Minimalista como header */}
          <div className="opacity-0 animate-fade-in-up animation-delay-800">
            <button 
              onClick={() => {
                const element = document.getElementById('servicios');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group inline-flex items-center space-x-3 text-white/90 hover:text-white transition-all duration-300"
            >
              <span className="text-sm font-light tracking-wider">EXPLORAR NUESTRO CURSO PRESENCIAL PARA DOCENTES GRATUITO</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
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