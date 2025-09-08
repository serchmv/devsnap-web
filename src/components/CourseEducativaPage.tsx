import React, { useState, useEffect, useRef } from 'react';
import { 
    ArrowLeft, Users, Clock, Smartphone, Heart, CheckCircle, Star, Award, 
    MessageCircle, ArrowRight, BookOpen, X, Info, Zap, Palette, Image, 
    Gift, BrainCircuit, Library, PlayCircle, ClipboardList, Infinity, Target 
} from 'lucide-react';

const programaDetallado = [
    {
      session: 1,
      title: "Fundamentos y Primeros Pasos",
      duration: "2 horas",
      color: "emerald",
      detailedTopics: [
        { title: "Desmitificar la IA para educadores", description: "Romperemos las barreras y miedos iniciales. Entenderás que la IA es un asistente, no un reemplazo, y que las mejores herramientas son gratuitas y accesibles." },
        { title: "Instalación y configuración de herramientas", description: "Te guiaremos paso a paso para instalar y configurar Gemini en tu celular, asegurando que todos estén listos para empezar a crear desde el minuto uno." },
        { title: "La fórmula mágica del prompt perfecto", description: "Aprenderás la estructura ROL-TAREA-CONTEXTO-FORMATO para darle instrucciones claras a la IA y obtener exactamente los resultados que necesitas." },
        { title: "Crear tu primer material didáctico", description: "En esta sesión, generarás tu primer recurso tangible: un ejercicio o un cuento que podrás usar en tu clase al día siguiente." }
      ]
    },
    {
      session: 2,
      title: "Herramientas Avanzadas",
      duration: "2 horas", 
      color: "cyan",
      detailedTopics: [
        { title: "Gemini como creador visual profesional", description: "Descubrirás cómo generar imágenes, ilustraciones y diagramas de alta calidad para tus presentaciones, periódicos murales y fichas de trabajo." },
        { title: "NotebookLM: tu biblioteca inteligente", description: "Aprenderás a subir tus propios documentos (planes de estudio, PDFs) para que la IA los analice y te ayude a crear contenido 100% alineado a tu currícula." },
        { title: "Análisis inteligente de documentos", description: "Practicarás cómo extraer resúmenes, glosarios, ideas clave y hasta preguntas de examen directamente de tus materiales de base." },
        { title: "Combinando ambas herramientas", description: "Veremos un flujo de trabajo práctico donde analizas un tema con NotebookLM y luego usas esas ideas en Gemini para crear una lección completa." }
      ]
    },
    {
      session: 3,
      title: "Dominio y Aplicación Profesional",
      duration: "2 horas",
      color: "blue", 
      detailedTopics: [
        { title: "Masterclass por materia", description: "Nos dividiremos en casos prácticos para Matemáticas, Español, Ciencias, etc., creando recursos avanzados y específicos para cada área." },
        { title: "Conociendo más herramientas de IA", description: "Exploraremos brevemente otras herramientas gratuitas y potentes como Perplexity para investigación y Poe para comparar modelos de IA." },
        { title: "Roadmap personalizado", description: "Cada docente creará su propio plan de 30 días para integrar la IA en su rutina, estableciendo metas realistas y medibles." },
        { title: "Red de educadores innovadores", description: "Estableceremos las bases de nuestra comunidad de práctica para continuar aprendiendo, compartiendo recursos y resolviendo dudas después del curso." }
      ]
    }
  ];

interface CourseEducativaPageProps {
  content: any;
}

const CourseEducativaPage: React.FC<CourseEducativaPageProps> = ({ content }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showDeclaration, setShowDeclaration] = useState(false);
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);
  const [showProgramaPopup, setShowProgramaPopup] = useState(false);

  const [whatsappForm, setWhatsappForm] = useState({
    nombre: '',
    esDocente: '',
    nivelDocente: '',
    esDeNicolasRomero: ''
  });

  // Animación de píxeles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const setCanvasSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    const pixels: any[] = [];
    const numberOfPixels = window.innerWidth < 768 ? 50 : 90;
    class Pixel {
      x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; pulseSpeed: number; pulseOffset: number; baseOpacity: number; opacityAmplitude: number;
      constructor() {
        this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 4 + 2; this.speedX = (Math.random() - 0.5) * 0.3; this.speedY = (Math.random() - 0.5) * 0.3; this.baseOpacity = Math.random() * 0.2 + 0.3; this.opacityAmplitude = Math.random() * 0.1 + 0.15; this.opacity = this.baseOpacity;
        const colors = ['#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899']; this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulseSpeed = Math.random() * 0.02 + 0.01; this.pulseOffset = Math.random() * Math.PI * 2;
      }
      update(time: number) {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) { this.speedX = -this.speedX; }
        if (this.y > canvas.height || this.y < 0) { this.speedY = -this.speedY; }
        this.opacity = this.baseOpacity + this.opacityAmplitude * Math.sin(time * this.pulseSpeed + this.pulseOffset);
      }
      draw() {
        if (!ctx) return;
        ctx.save(); ctx.fillStyle = this.color; ctx.globalAlpha = this.opacity;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2); ctx.fill();
        ctx.shadowColor = this.color; ctx.shadowBlur = 10; ctx.globalAlpha = this.opacity * 0.6;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
    }
    const init = () => { pixels.length = 0; for (let i = 0; i < numberOfPixels; i++) { pixels.push(new Pixel()); } };
    init();
    let animationId: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pixels.length; i++) { pixels[i].update(time * 0.0006); pixels[i].draw(); }
      animationId = requestAnimationFrame(animate);
    };
    animate(0);
    return () => { window.removeEventListener('resize', setCanvasSize); cancelAnimationFrame(animationId); };
  }, []);

  const handleWhatsappFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setWhatsappForm(prevForm => {
      const newForm = { ...prevForm, [name]: value };
      if (name === 'esDocente' && value !== 'Sí') {
        newForm.nivelDocente = '';
      }
      return newForm;
    });
  };

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let messageDetails = '';
    if (whatsappForm.esDocente === 'Sí') {
      messageDetails = `• Soy docente y doy clases en: ${whatsappForm.nivelDocente}`;
    } else {
      messageDetails = `• No soy docente, pero me gustaría recibir más información.`;
    }
    const message = `¡Hola! Quiero información sobre el curso gratuito de IA.
    
• Mi nombre es: ${whatsappForm.nombre}
${messageDetails}
• Laboro/vivo en Nicolás Romero: ${whatsappForm.esDeNicolasRomero}

¡Gracias!`;
    const whatsappUrl = `https://wa.me/525578470070?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsappPopup(false); 
  };

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 min-h-screen overflow-y-auto">
        <div className="pb-6">
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

        <section>
          <div className="devsnap-container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full px-6 py-2 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-emerald-300 text-sm font-medium font-encode-sans">INICIATIVA SOCIAL SIN FINES DE LUCRO • DEVSNAP</span>
                <button
                  onClick={() => setShowDeclaration(true)}
                  className="ml-3 text-emerald-300 hover:text-emerald-200 transition-colors duration-200 flex items-center space-x-1 text-xs underline"
                >
                  <Info className="w-3 h-3" />
                  <span>Ver más</span>
                </button>
              </div>

              <h1 className="text-5xl md:text-7xl font-thin text-white mb-4 leading-tight tracking-tight">
                <span className="text-white">Transforma tu</span>
                <span className="block font-normal bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent opacity-0 animate-fade-in-up animation-delay-400">
                  Aula con IA
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-encode-sans">
              Capacitación profesional <strong className="text-emerald-400">100% gratuita </strong> 
              dirigida a docentes de nivel básico y media superior de Nicolás Romero, Edo. Méx. 
              Ofreciendo un programa innovador en el uso estratégico de herramientas de inteligencia artificial para transformar sus aulas y elevar significativamente la calidad educativa de nuestro municipio.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
                <div className="text-center"><div className="text-lg font-bold text-emerald-400 font-encode-sans">Prácticas</div></div>
                <div className="text-center"><div className="text-lg font-bold text-cyan-400 font-encode-sans">Totalmente Gratuito</div></div>
                <div className="text-center"><div className="text-lg font-bold text-blue-400 font-encode-sans">Presencial</div></div>
                <div className="text-center"><div className="text-lg font-bold text-purple-400 font-encode-sans">Solo necesitas tu Celular</div></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                  onClick={() => setShowWhatsappPopup(true)}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl px-8 py-4 backdrop-blur-sm text-blue-300 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-blue-400/50 hover:from-blue-500/30 hover:to-cyan-500/30 font-encode-sans"
                >
                  <span>Inscribirme Ahora</span>
                </button>
                
                <button
                  onClick={() => setShowProgramaPopup(true)}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-black/20 to-black/30 border border-white/40 rounded-xl px-8 py-4 backdrop-blur-sm text-white/80 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-white/60 hover:from-black/30 hover:to-black/40 space-x-2 font-encode-sans"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Ver Programa</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-16">
          <div className="devsnap-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 font-encode-sans">¿Qué vas a lograr?</h2>
              <div className="text-xl text-gray-300 max-w-3xl mx-auto font-encode-sans">
                <p>Optimizarás tu práctica docente con IA, reduciendo significativamente tu tiempo de planeación mientras elevas el engagement y aprendizaje de tus estudiantes. La inteligencia artificial llegó para quedarse y evoluciona constantemente.</p>
                <p className="mt-4"><strong className="text-emerald-400">Aprende a dominarla hoy y forma estudiantes preparados para el futuro.</strong></p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Zap size={32} className="text-white" />, title: "Crear en Minutos", description: "Exámenes, fichas y actividades de calidad.", color: "from-yellow-500 to-orange-500" },
                { icon: <Palette size={32} className="text-white" />, title: "Contenido Único", description: "Actividades personalizadas, explicaciones adaptadas y materiales que conectan con cada estudiante.", color: "from-pink-500 to-rose-500" },
                { icon: <Image size={32} className="text-white" />, title: "Imágenes Profesionales", description: "Ilustraciones, diagramas, decoraciones, etc. Tu aula se verá como si tuvieras un diseñador personal.", color: "from-purple-500 to-indigo-500" },
                { icon: <Gift size={32} className="text-white" />, title: "100% Gratuito", description: "No necesitas pagar nada para participar. No vendemos nada, consulta mas nuestro aviso de privacidad.", color: "from-blue-500 to-cyan-500" },
                { icon: <BrainCircuit size={32} className="text-white" />, title: "Análisis Inteligente", description: "Sube planes de estudio o libros y obtén resúmenes, glosarios y evaluaciones de calidad.", color: "from-green-500 to-emerald-500" },
                { icon: <CheckCircle size={32} className="text-white" />, title: "Resultados que puedes ver", description: "Desde la primera sesión tendrás acceso a materiales para usar en tu aula.", color: "from-emerald-500 to-teal-500" }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto`}>{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center font-encode-sans">{benefit.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed font-encode-sans">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programa" className="py-16 bg-white/5">
          <div className="devsnap-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 font-encode-sans">Programa del Curso</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-encode-sans">6 horas de contenido práctico distribuidas en 3 sesiones intensivas</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {programaDetallado.map((session, index) => (
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
                      {session.detailedTopics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`w-5 h-5 text-${session.color}-400 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-300 font-encode-sans">{topic.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-encode-sans flex items-center justify-center"><Award className="w-6 h-6 text-emerald-400 mr-3" />Todo esto está incluido</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Award className="w-6 h-6 text-emerald-400" />, text: "Certificado de participación" },
                  { icon: <Library className="w-6 h-6 text-emerald-400" />, text: "Biblioteca de 50+ prompts probados" },
                  { icon: <PlayCircle className="w-6 h-6 text-emerald-400" />, text: "Videos tutoriales exclusivos" },
                  { icon: <MessageCircle className="w-6 h-6 text-emerald-400" />, text: "Grupo de WhatsApp para soporte" },
                  { icon: <ClipboardList className="w-6 h-6 text-emerald-400" />, text: "Plantillas para todas las materias" },
                  { icon: <Infinity className="w-6 h-6 text-emerald-400" />, text: "Metodología replicable infinita" },
                  { icon: <Users className="w-6 h-6 text-emerald-400" />, text: "Acceso a comunidad de práctica" },
                  { icon: <Target className="w-6 h-6 text-emerald-400" />, text: "Seguimiento personalizado 30 días" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <span className="text-gray-300 text-sm font-encode-sans">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section id="inscripcion" className="py-16 bg-white/5">
          <div className="devsnap-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6 font-encode-sans">Únete a la Transformación Educativa</h2>
              <p className="text-xl text-gray-300 mb-8 font-encode-sans">Los cupos son limitados para garantizar una experiencia personalizada.<br />Asegura tu lugar en este programa gratuito y sé un pionero en tu comunidad.</p>
              <div className="inline-flex items-center bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2 backdrop-blur-sm mb-10">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-red-300 text-sm font-medium font-encode-sans">⏰ ÚLTIMOS LUGARES DISPONIBLES</span>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowWhatsappPopup(true)}
                  className="w-full max-w-md bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 font-encode-sans"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Inscríbete por WhatsApp</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* POPUP DE DECLARACIÓN RESTAURADO */}
      {showDeclaration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowDeclaration(false)}
          ></div>
          <div className="relative bg-slate-800 rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto border border-emerald-400/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white font-encode-sans flex items-center">
                <Heart className="w-6 h-6 text-emerald-400 mr-3" />
                Declaración Sin Fines de Lucro
              </h2>
              <button
                onClick={() => setShowDeclaration(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6 text-gray-300 font-encode-sans">
              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl p-6 border border-emerald-400/30">
                <h3 className="text-emerald-300 font-semibold text-lg mb-3 flex items-center"><Award className="w-5 h-5 mr-2" />Nuestra Misión</h3>
                <p className="leading-relaxed">Democratizar el acceso a herramientas de inteligencia artificial para docentes de educación basica y media superior en México, contribuyendo a reducir la brecha digital educativa y mejorando la calidad de la enseñanza a través de la innovación tecnológica accesible.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Nuestros Principios Fundamentales:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Sin Costo Alguno", description: "Este curso es 100% gratuito. No cobramos inscripciones, materiales, certificados ni cuotas.", icon: "💰" },
                    { title: "Sin Ventas Ocultas", description: "No vendemos productos o servicios premium durante o después de la capacitación.", icon: "🚫" },
                    { title: "Sin Recolección de Datos Comerciales", description: "No recopilamos información personal con fines comerciales o de marketing.", icon: "🛡️" },
                    { title: "Sin Afiliaciones Comerciales", description: "No tenemos vínculos económicos con las empresas de tecnología. Usamos herramientas gratuitas.", icon: "🤖" }
                  ].map((principle, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{principle.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold mb-2">{principle.title}</h4>
                          <p className="text-sm text-gray-300 leading-relaxed">{principle.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Nuestros Valores:</h3>
                <div className="space-y-3">
                  {[
                    { title: "Equidad Educativa", description: "Todos los docentes merecen acceso a herramientas que mejoren su práctica educativa." },
                    { title: "Transparencia Total", description: "Operamos con completa transparencia sobre nuestros objetivos, metodología y recursos." },
                    { title: "Compromiso Social", description: "Nuestro único interés es contribuir al fortalecimiento del sistema educativo mexicano." },
                    { title: "Calidad sin Compromisos", description: "Ofrecemos capacitación de alta calidad sin esperar nada a cambio." }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white/5 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-emerald-300">{value.title}:</strong>
                        <span className="text-gray-300 ml-2">{value.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
                <h3 className="text-blue-300 font-semibold text-lg mb-3">Nuestro Compromiso:</h3>
                <p className="leading-relaxed mb-4">La satisfacción de contribuir al desarrollo profesional de maestros mexicanos y, indirectamente, al mejoramiento de la educación de miles de niños en nuestro país. Este es nuestro único y verdadero beneficio.</p>
                <div className="text-center">
                  <div className="inline-flex items-center bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-400/30">
                    <Heart className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-emerald-300 font-semibold">100% Proyecto Social</span>
                  </div>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm mb-3">Esta declaración es pública y puede ser compartida libremente.</p>
                <div className="space-y-1">
                  <p className="font-semibold text-white">Ing. Sergio Morales</p>
                  <p className="text-blue-400">Fundador de DevSnap</p>
                  <p className="text-gray-400 text-sm">Facilitador e Impulsor de la Iniciativa "Mi Primer Asistente con IA"</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <button onClick={() => setShowDeclaration(false)} className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 font-encode-sans">Entendido</button>
            </div>
          </div>
        </div>
      )}

      {/* Popup para inscripción por WhatsApp */}
      {showWhatsappPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowWhatsappPopup(false)}></div>
          <div className="relative bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6"><h2 className="text-2xl font-bold text-gray-800 font-encode-sans flex items-center"><MessageCircle className="w-6 h-6 text-emerald-500 mr-3" />Inscripción Rápida</h2><button onClick={() => setShowWhatsappPopup(false)} className="text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100"><X className="w-6 h-6" /></button></div>
            <form onSubmit={handleWhatsappSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">Tu nombre *</label>
                <input type="text" name="nombre" value={whatsappForm.nombre} onChange={handleWhatsappFormChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans" placeholder="Escribe tu nombre completo" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">¿Eres docente? *</label>
                <select name="esDocente" value={whatsappForm.esDocente} onChange={handleWhatsappFormChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans">
                  <option value="">Selecciona una opción...</option>
                  <option value="Sí">Sí</option>
                  <option value="No, pero quiero más información">No, pero quiero más información</option>
                </select>
              </div>
              {whatsappForm.esDocente === 'Sí' && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">¿Qué nivel impartes? *</label>
                  <select name="nivelDocente" value={whatsappForm.nivelDocente} onChange={handleWhatsappFormChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans">
                    <option value="">Selecciona tu nivel...</option>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Preparatoria">Preparatoria</option>
                    <option value="Universidad">Universidad</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 font-encode-sans">¿Laboras o vives en Nicolás Romero? *</label>
                <select name="esDeNicolasRomero" value={whatsappForm.esDeNicolasRomero} onChange={handleWhatsappFormChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-encode-sans">
                  <option value="">Selecciona una opción...</option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-encode-sans">
                <span>Enviar y Abrir WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </button>
               <p className="text-xs text-gray-500 text-center font-encode-sans">* Serás redirigido a WhatsApp para enviar tu solicitud.</p>
            </form>
          </div>
        </div>
      )}

      {/* Popup del Programa */}
      {showProgramaPopup && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowProgramaPopup(false)}></div>
          <div className="relative bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
              <h2 className="text-2xl font-bold text-white font-encode-sans flex items-center"><BookOpen className="w-6 h-6 text-cyan-400 mr-3" />Programa Detallado del Curso</h2>
              <button onClick={() => setShowProgramaPopup(false)} className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-8">
              {programaDetallado.map((session) => (
                <div key={session.session} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-lg font-bold font-encode-sans text-${session.color}-400`}>Sesión {session.session}</span>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white font-encode-sans">{session.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold font-encode-sans text-white">{session.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {session.detailedTopics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 text-${session.color}-400 mt-1 flex-shrink-0`} />
                        <div>
                          <p className="font-semibold text-white">{topic.title}</p>
                          <p className="text-gray-300 text-sm font-encode-sans">{topic.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <button onClick={() => setShowProgramaPopup(false)} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 font-encode-sans">Entendido</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseEducativaPage;