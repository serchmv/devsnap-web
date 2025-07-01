import React from 'react';

interface IAMachineLearningPageProps {
  content: any;
}

const IAMachineLearningPage: React.FC<IAMachineLearningPageProps> = ({ content }) => {
  return (
    <section id="ia-machine-learning" className="blautech-section bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="blautech-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mb-6">
            <span className="text-4xl text-white">🤖</span>
          </div>
          <h1 className="blautech-title text-blautech-primary mb-4">
            Inteligencia Artificial & Machine Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformamos datos en decisiones inteligentes mediante algoritmos avanzados y modelos predictivos que revolucionan tu operación empresarial.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Services */}
          <div className="fade-in-up stagger-1">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Nuestros Servicios de IA
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Chatbots Inteligentes 24/7",
                  description: "Sistemas conversacionales que entienden contexto y emociones para brindar atención al cliente excepcional.",
                  features: ["Procesamiento de lenguaje natural", "Integración omnicanal", "Aprendizaje continuo", "Análisis de sentimientos"]
                },
                {
                  title: "Análisis Predictivo de Ventas",
                  description: "Modelos que anticipan tendencias de mercado y comportamiento del cliente para optimizar estrategias comerciales.",
                  features: ["Forecasting avanzado", "Segmentación inteligente", "Recomendaciones personalizadas", "Optimización de precios"]
                },
                {
                  title: "Reconocimiento de Imágenes",
                  description: "Visión artificial para automatizar procesos de inspección, control de calidad y análisis visual.",
                  features: ["Detección de objetos", "Clasificación automática", "OCR avanzado", "Análisis facial"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
                  <h3 className="text-lg font-bold text-blautech-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits & Tech Stack */}
          <div className="fade-in-up stagger-2">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Beneficios para tu Empresa
            </h2>
            
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white mb-8">
              <div className="space-y-4">
                {[
                  { icon: "📈", text: "Incremento del 40% en eficiencia operativa" },
                  { icon: "💰", text: "Reducción de costos hasta 60%" },
                  { icon: "🎯", text: "Precisión en predicciones >95%" },
                  { icon: "⚡", text: "Respuestas automáticas en <2 segundos" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <h3 className="text-lg font-bold text-blautech-primary mb-4">Tecnologías que Utilizamos</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "TensorFlow", logo: "/images/tech-logos/tensorflow-logo.png" },
                  { name: "Python", logo: "/images/tech-logos/python-logo.png" },
                  { name: "PyTorch", logo: "🔥" },
                  { name: "OpenAI GPT", logo: "🧠" },
                  { name: "Scikit-learn", logo: "📊" },
                  { name: "Hugging Face", logo: "🤗" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-purple-50 rounded-lg">
                    {tech.logo.startsWith('/') ? (
                      <img src={tech.logo} alt={tech.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <span className="text-lg">{tech.logo}</span>
                    )}
                    <span className="text-sm font-medium text-purple-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="fade-in-up stagger-3">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Casos de Éxito Reales
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                industry: "E-commerce",
                title: "Sistema de Recomendaciones",
                description: "Incremento del 35% en ventas cruzadas mediante IA personalizada.",
                metric: "+35% ventas"
              },
              {
                industry: "Fintech",
                title: "Detección de Fraudes",
                description: "Reducción del 90% en fraudes con ML en tiempo real.",
                metric: "-90% fraudes"
              },
              {
                industry: "Manufactura",
                title: "Mantenimiento Predictivo",
                description: "Prevención de fallas con 98% de precisión.",
                metric: "98% precisión"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {caseStudy.industry}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blautech-primary mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full">
                    {caseStudy.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up stagger-4">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Implementar IA en tu Empresa?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Nuestros expertos en Machine Learning diseñarán una solución personalizada para tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                CONSULTORÍA GRATUITA EN IA
              </a>
              <a 
                href="#casos-ia" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                VER MÁS CASOS DE ÉXITO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAMachineLearningPage;
