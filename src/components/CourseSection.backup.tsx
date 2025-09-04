// ARCHIVO OBSOLETO - REEMPLAZADO POR CourseEducativaPage.tsx
// Mantener solo como backup histórico
// TODO: Eliminar después de confirmar que la nueva página funciona bien
import React, { useState } from 'react';
import { ArrowRight, Users, Clock, Smartphone, BookOpen, Lightbulb, Heart, CheckCircle, Star, Award, MessageCircle } from 'lucide-react';

interface CourseSectionProps {
  content: any;
}

const CourseSection: React.FC<CourseSectionProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    escuela: '',
    grado: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrar con tu sistema de forms/CRM aquí
    console.log('Formulario enviado:', formData);
    
    // WhatsApp message con datos del formulario
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

  return (
    <section id="curso-ia" className="relative devsnap-section bg-gradient-to-br from-gray-950 via-slate-900 to-zinc-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/fondosnap_1.svg')] bg-no-repeat bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent"></div>
      </div>

      <div className="relative z-10 devsnap-container">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full px-6 py-2 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-emerald-300 text-sm font-medium font-encode-sans">INICIATIVA SOCIAL SIN FINES DE LUCRO</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-encode-sans">
            <span className="text-white">Transforma tu</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Aula con IA
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-encode-sans">
            Curso profesional <strong className="text-emerald-400">100% gratuito</strong> para docentes de primaria. 
            Aprende a crear materiales didácticos en minutos usando herramientas de inteligencia artificial.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center fade-in-up stagger-1">
              <div className="text-3xl font-bold text-emerald-400 font-encode-sans">6</div>
              <div className="text-sm text-gray-400 font-encode-sans">Horas Total</div>
            </div>
            <div className="text-center fade-in-up stagger-2">
              <div className="text-3xl font-bold text-cyan-400 font-encode-sans">100%</div>
              <div className="text-sm text-gray-400 font-encode-sans">Gratuito</div>
            </div>
            <div className="text-center fade-in-up stagger-3">
              <div className="text-3xl font-bold text-blue-400 font-encode-sans">20</div>
              <div className="text-sm text-gray-400 font-encode-sans">Cupos Únicos</div>
            </div>
            <div className="text-center fade-in-up stagger-4">
              <div className="text-3xl font-bold text-purple-400 font-encode-sans">📱</div>
              <div className="text-sm text-gray-400 font-encode-sans">Solo tu celular</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Course Info */}
          <div className="space-y-8 fade-in-up stagger-1">
            {/* What You'll Learn */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-encode-sans flex items-center">
                <Lightbulb className="w-6 h-6 text-emerald-400 mr-3" />
                ¿Qué vas a lograr?
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: "⚡", text: "Crear exámenes en 2 minutos en lugar de 2 horas" },
                  { icon: "🎨", text: "Generar imágenes educativas profesionales" },
                  { icon: "📚", text: "Diseñar cuentos personalizados para cada tema" },
                  { icon: "🧩", text: "Desarrollar actividades creativas e interactivas" },
                  { icon: "📊", text: "Analizar documentos oficiales instantáneamente" },
                  { icon: "🎯", text: "Reducir 70% del tiempo de planeación" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl">{benefit.icon}</span>
                    <span className="text-gray-300 font-encode-sans">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Structure */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-encode-sans flex items-center">
                <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
                Programa del Curso
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h4 className="font-semibold text-emerald-400 font-encode-sans">Sesión 1: Fundamentos (2h)</h4>
                  <p className="text-gray-300 text-sm font-encode-sans">Conoce Gemini y crea tu primer material didáctico</p>
                </div>
                <div className="border-l-4 border-cyan-400 pl-6">
                  <h4 className="font-semibold text-cyan-400 font-encode-sans">Sesión 2: Herramientas Avanzadas (2h)</h4>
                  <p className="text-gray-300 text-sm font-encode-sans">NotebookLM y creación de imágenes profesionales</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="font-semibold text-blue-400 font-encode-sans">Sesión 3: Aplicación Práctica (2h)</h4>
                  <p className="text-gray-300 text-sm font-encode-sans">Casos por materia y uso ético de la IA</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg border border-emerald-400/30">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="font-semibold text-emerald-400 font-encode-sans">Incluye:</span>
                </div>
                <ul className="text-sm text-gray-300 space-y-1 font-encode-sans">
                  <li>✅ Certificado de participación</li>
                  <li>✅ Biblioteca de prompts probados</li>
                  <li>✅ Videos tutoriales exclusivos</li>
                  <li>✅ Grupo de WhatsApp para soporte</li>
                </ul>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-encode-sans">Tu Instructor</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-devsnap-secondary to-devsnap-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SM
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white font-encode-sans">Ing. Sergio Morales</h4>
                  <p className="text-devsnap-secondary font-semibold font-encode-sans">Fundador de DevSnap</p>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed font-encode-sans">
                    Ingeniero en Computación con 9 años de experiencia en TI. 
                    Especialista en democratizar herramientas tecnológicas para educadores mexicanos.
                  </p>
                  
                  <div className="flex items-center mt-3 space-x-4">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-encode-sans">9 años experiencia</span>
                    </div>
                    <div className="flex items-center text-emerald-400">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm font-encode-sans">Proyecto social</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="fade-in-up stagger-2">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-encode-sans">¡Inscríbete Gratis!</h3>
                  <p className="text-gray-600 font-encode-sans">Solo 20 cupos disponibles</p>
                  
                  <div className="mt-4 flex justify-center">
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold font-encode-sans">
                      ⏰ Últimos lugares disponibles
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent transition-colors font-encode-sans"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent transition-colors font-encode-sans"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent transition-colors font-encode-sans"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent transition-colors font-encode-sans"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-devsnap-secondary focus:border-transparent transition-colors font-encode-sans"
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
                    <span>Inscribirme por WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4 font-encode-sans">
                    * Al inscribirte aceptas recibir información del curso vía WhatsApp. 
                    Proyecto social sin fines de lucro de DevSnap.
                  </p>
                </form>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="font-encode-sans">100% Gratuito</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="font-encode-sans">Grupos pequeños</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-purple-500 mr-1" />
                      <span className="font-encode-sans">Certificado incluido</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center fade-in-up stagger-3">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4 font-encode-sans">
              ¿Por qué este curso es diferente?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 font-encode-sans">100% Móvil</h4>
                <p className="text-gray-300 text-sm font-encode-sans">
                  Solo necesitas tu celular. Si sabes usar WhatsApp, puedes dominar estas herramientas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 font-encode-sans">Resultados Inmediatos</h4>
                <p className="text-gray-300 text-sm font-encode-sans">
                  Desde la primera sesión crearás materiales que usarás al día siguiente en tu aula.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 font-encode-sans">Proyecto Social</h4>
                <p className="text-gray-300 text-sm font-encode-sans">
                  Iniciativa sin fines de lucro para democratizar la educación de calidad en México.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-400/30">
              <p className="text-emerald-300 font-semibold text-lg font-encode-sans">
                "En 30 minutos creo lo que antes me tomaba 3 horas. Mis alumnos están más motivados porque los materiales son únicos y creativos."
              </p>
              <p className="text-emerald-400 text-sm mt-2 font-encode-sans">
                - Profra. María Elena, 3er grado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;