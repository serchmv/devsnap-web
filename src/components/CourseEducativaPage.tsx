import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Users, Clock, Smartphone, BookOpen, Lightbulb, Heart, CheckCircle, Star, Award, MessageCircle, ArrowRight, Download, Play, Video } from 'lucide-react';

interface CourseEducativaPageProps {
  content: any;
}

const CourseEducativaPage: React.FC<CourseEducativaPageProps> = ({ content }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    escuela: '',
    grado: ''
  });

  // Animación de píxeles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Configuración de píxeles
    const pixels: any[] = [];
    const numberOfPixels = 80;

    class Pixel {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.6 + 0.4;
        
        const colors = ['#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }

        this.opacity = 0.4 + 0.4 * Math.sin(time * this.pulseSpeed + this.pulseOffset);
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = this.opacity * 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Inicializar píxeles
    const init = () => {
      pixels.length = 0;
      for (let i = 0; i < numberOfPixels; i++) {
        pixels.push(new Pixel());
      }
    };
    init();

    // Loop de animación
    let animationId: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < pixels.length; i++) {
        pixels[i].update(time * 0.001);
        pixels[i].draw();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `¡Hola! Me quiero inscribir al curso gratuito de IA para docentes.
    
Mis datos:
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Escuela: ${formData.escuela}
• Grado: ${formData.grado}

¡Espero su confirmación!`;
    
    const whatsappUrl = `https://wa.me/525578470070?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Canvas de píxeles animados */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 z-0"
      />

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen overflow-y-auto">
        {/* Botón volver */}
        <div className="pt-8 pb-6">
          <div className="devsnap-container">
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-encode-sans">Volver a Inicio</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="devsnap-container">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full px-6 py-2 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-emerald-300 text-sm font-medium font-encode-sans">INICIATIVA SOCIAL SIN FINES DE LUCRO • DEVSNAP</span>
              </div>

              {/* Título principal */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-encode-sans">
                <span className="text-white">Transforma tu</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Aula con IA
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-encode-sans">
                El primer curso profesional <strong className="text-emerald-400">100% gratuito</strong> en México 
                para que los docentes de primaria dominen herramientas de inteligencia artificial 
                y revolucionen su forma de enseñar.
              </p>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 font-encode-sans">6</div>
                  <div className="text-sm text-gray-400 font-encode-sans">Horas Prácticas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 font-encode-sans">$0</div>
                  <div className="text-sm text-gray-400 font-encode-sans">Totalmente Gratis</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 font-encode-sans">20</div>
                  <div className="text-sm text-gray-400 font-encode-sans">Lugares Exclusivos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 font-encode-sans">📱</div>
                  <div className="text-sm text-gray-400 font-encode-sans">Solo tu Celular</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="#inscripcion"
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2 font-encode-sans"
                >
                  <span>🚀 Inscribirme Ahora</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a
                  href="#programa"
                  className="border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center space-x-2 font-encode-sans"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Ver Programa</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section id="beneficios" className="py-16">
          <div className="devsnap-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 font-encode-sans">
                ¿Qué vas a lograr?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-encode-sans">
                Transformarás tu forma de enseñar con herramientas que te ahorran tiempo y sorprenden a tus estudiantes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: "⚡", 
                  title: "Crear en Minutos", 
                  description: "Exámenes, fichas y actividades en 2-3 minutos. Lo que te tomaba horas, ahora lo haces mientras tomas café.",
                  color: "from-yellow-500 to-orange-500"
                },
                { 
                  icon: "🎨", 
                  title: "Contenido Único", 
                  description: "Cuentos personalizados, explicaciones adaptadas y materiales que conectan con cada estudiante.",
                  color: "from-pink-500 to-rose-500" 
                },
                { 
                  icon: "🖼️", 
                  title: "Imágenes Profesionales", 
                  description: "Ilustraciones, diagramas y decoraciones. Tu aula se verá como si tuvieras un diseñador personal.",
                  color: "from-purple-500 to-indigo-500"
                },
                { 
                  icon: "📱", 
                  title: "100% Móvil", 
                  description: "Si sabes usar WhatsApp, puedes dominar estas herramientas. Solo necesitas tu celular.",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: "🔍", 
                  title: "Análisis Inteligente", 
                  description: "Sube planes de estudio o libros y obtén resúmenes, glosarios y evaluaciones al instante.",
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  icon: "🌟", 
                  title: "Resultados Inmediatos", 
                  description: "Desde la primera sesión tendrás materiales para usar al día siguiente en tu aula.",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center font-encode-sans">{benefit.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed font-encode-sans">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programa Section */}
        <section id="programa" className="py-16 bg-white/5">
          <div className="devsnap-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 font-encode-sans">
                Programa del Curso
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-encode-sans">
                6 horas de contenido práctico distribuidas en 3 sesiones intensivas
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  session: 1,
                  title: "Fundamentos y Primeros Pasos",
                  duration: "2 horas",
                  color: "emerald",
                  topics: [
                    "Desmitificar la IA para educadores",
                    "Instalación y configuración de Gemini",
                    "La fórmula mágica del prompt perfecto",
                    "Crear tu primer material didáctico"
                  ]
                },
                {
                  session: 2,
                  title: "Herramientas Avanzadas",
                  duration: "2 horas", 
                  color: "cyan",
                  topics: [
                    "Gemini como creador visual profesional",
                    "NotebookLM: tu biblioteca personal",
                    "Análisis inteligente de documentos",
                    "Combinando ambas herramientas"
                  ]
                },
                {
                  session: 3,
                  title: "Aplicación Práctica y Ética",
                  duration: "2 horas",
                  color: "blue", 
                  topics: [
                    "Casos prácticos por materia específica",
                    "Las 5 reglas de oro del uso ético",
                    "Plan personal de implementación",
                    "Comunidad de práctica continua"
                  ]
                }
              ].map((session, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                  <div className={`bg-gradient-to-r from-${session.color}-500 to-${session.color}-600 p-6 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold font-encode-sans">Sesión {session.session}</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-encode-sans">{session.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold font-encode-sans">{session.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {session.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`w-5 h-5 text-${session.color}-400 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-300 font-encode-sans">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Incluido */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-encode-sans flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-400 mr-3" />
                Todo esto está incluido
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "🏆", text: "Certificado oficial de participación" },
                  { icon: "📚", text: "Biblioteca de 50+ prompts probados" },
                  { icon: "🎥", text: "Videos tutoriales exclusivos" },
                  { icon: "💬", text: "Grupo de WhatsApp para soporte" },
                  { icon: "📝", text: "Plantillas para todas las materias" },
                  { icon: "🔄", text: "Metodología replicable infinita" },
                  { icon: "👥", text: "Acceso a comunidad de práctica" },
                  { icon: "🎯", text: "Seguimiento personalizado 30 días" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-gray-300 text-sm font-encode-sans">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-16">
          <div className="devsnap-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6 font-encode-sans">
                  Tu Instructor
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                      SM
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center text-yellow-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-sm font-encode-sans">9 años experiencia</span>
                      </div>
                      <div className="flex items-center justify-center text-emerald-400">
                        <Heart className="w-4 h-4 mr-1" />
                        <span className="text-sm font-encode-sans">Proyecto social</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-2 font-encode-sans">Ing. Sergio Morales</h3>
                    <p className="text-blue-400 font-semibold mb-4 font-encode-sans">Fundador de DevSnap • Ingeniero en Computación</p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed font-encode-sans">
                      Con 9 años de experiencia en Tecnologías de la Información, Sergio se ha especializado 
                      en democratizar herramientas tecnológicas para educadores mexicanos. Como fundador de DevSnap, 
                      combina su expertise técnico con una pasión genuina por transformar la educación en México.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Ingeniero en Computación certificado",
                        "9 años liderando proyectos de TI",
                        "Fundador de DevSnap Consulting",
                        "Especialista en IA aplicada a educación"
                      ].map((credential, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-gray-300 text-sm font-encode-sans">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inscripción Section */}
        <section id="inscripcion" className="py-16 bg-white/5">
          <div className="devsnap-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6 font-encode-sans">
                  ¡Inscríbete Ahora!
                </h2>
                <p className="text-xl text-gray-300 mb-8 font-encode-sans">
                  Solo 20 cupos disponibles. Curso completamente gratuito.
                </p>
                
                <div className="inline-flex items-center bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-red-300 text-sm font-medium font-encode-sans">⏰ ÚLTIMOS LUGARES DISPONIBLES</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Formulario */}
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">
                        Escuela donde laboras *
                      </label>
                      <input
                        type="text"
                        name="escuela"
                        value={formData.escuela}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans"
                        placeholder="Nombre de tu escuela"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">
                        Grado que impartes *
                      </label>
                      <select
                        name="grado"
                        value={formData.grado}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans"
                      >
                        <option value="">Selecciona...</option>
                        <option value="1">1° Primaria</option>
                        <option value="2">2° Primaria</option>
                        <option value="3">3° Primaria</option>
                        <option value="4">4° Primaria</option>
                        <option value="5">5° Primaria</option>
                        <option value="6">6° Primaria</option>
                        <option value="varios">Varios grados</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-encode-sans"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Confirmar Inscripción por WhatsApp</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-gray-500 text-center font-encode-sans">
                      * Al inscribirte aceptas recibir información del curso vía WhatsApp. 
                      Proyecto social sin fines de lucro de DevSnap.
                    </p>
                  </form>
                </div>

                {/* Por qué es diferente */}
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 font-encode-sans">
                      ¿Por qué este curso es único?
                    </h3>
                    
                    <div className="space-y-6">
                      {[
                        {
                          icon: <Smartphone className="w-6 h-6" />,
                          title: "100% Móvil",
                          description: "Solo necesitas tu celular. Si sabes usar WhatsApp, puedes dominar estas herramientas.",
                          color: "emerald"
                        },
                        {
                          icon: <Clock className="w-6 h-6" />,
                          title: "Resultados Inmediatos", 
                          description: "Desde la primera sesión crearás materiales que usarás al día siguiente.",
                          color: "cyan"
                        },
                        {
                          icon: <Heart className="w-6 h-6" />,
                          title: "Proyecto Social",
                          description: "Iniciativa sin fines de lucro para democratizar la educación en México.",
                          color: "blue"
                        }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2 font-encode-sans">{feature.title}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed font-encode-sans">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-400/30">
                    <div className="text-center">
                      <p className="text-emerald-300 font-semibold text-lg mb-4 font-encode-sans italic">
                        "En 30 minutos creo lo que antes me tomaba 3 horas. Mis alumnos están más motivados porque los materiales son únicos y creativos."
                      </p>
                      <p className="text-emerald-400 font-encode-sans">
                        - Profra. María Elena, 3er grado
                      </p>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                      <span className="font-encode-sans">100% Gratuito</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="font-encode-sans">Grupos pequeños</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-purple-400 mr-1" />
                      <span className="font-encode-sans">Certificado oficial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseEducativaPage;