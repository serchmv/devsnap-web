import React from 'react';

interface ContentMarketingPageProps {
  content: any;
}

const ContentMarketingPage: React.FC<ContentMarketingPageProps> = ({ content }) => {
  return (
    <section id="content-marketing" className="blautech-section bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="blautech-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6">
            <span className="text-4xl text-white">📈</span>
          </div>
          <h1 className="blautech-title text-blautech-primary mb-4">
            Content Marketing & SEO
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aumenta tu visibilidad online y genera leads calificados con estrategias de contenido y SEO que posicionan tu marca como líder de la industria.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Services */}
          <div className="fade-in-up stagger-1">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Servicios de Marketing Digital
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Estrategia de Contenidos",
                  description: "Desarrollamos planes de contenido que conectan con tu audiencia objetivo y generan engagement genuino.",
                  features: ["Calendario editorial", "Investigación de audiencia", "Storytelling corporativo", "Content clusters temáticos"]
                },
                {
                  title: "SEO Técnico y Semántico",
                  description: "Optimización integral para motores de búsqueda que mejora rankings y aumenta tráfico orgánico calificado.",
                  features: ["Auditoría SEO completa", "Optimización on-page", "Link building estratégico", "SEO técnico avanzado"]
                },
                {
                  title: "Marketing Automation",
                  description: "Automatización de campañas y nurturing de leads para maximizar conversiones y ROI.",
                  features: ["Email marketing", "Lead scoring", "Segmentación avanzada", "Customer journey mapping"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
                  <h3 className="text-lg font-bold text-blautech-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Results & Tools */}
          <div className="fade-in-up stagger-2">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Resultados Medibles
            </h2>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-8">
              <div className="space-y-4">
                {[
                  { icon: "📊", text: "Incremento promedio 300% en tráfico orgánico" },
                  { icon: "🎯", text: "Mejora del 250% en generación de leads" },
                  { icon: "🚀", text: "ROI promedio del 400% en 12 meses" },
                  { icon: "📈", text: "Aumento del 180% en conversiones" }
                ].map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{result.icon}</span>
                    <span className="font-medium">{result.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <h3 className="text-lg font-bold text-blautech-primary mb-4">Herramientas Especializadas</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Google Analytics", icon: "📊" },
                  { name: "SEMrush", icon: "🔍" },
                  { name: "HubSpot", icon: "🚀" },
                  { name: "Ahrefs", icon: "🔗" },
                  { name: "Mailchimp", icon: "📧" },
                  { name: "Google Ads", icon: "💡" }
                ].map((tool, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <span className="text-lg">{tool.icon}</span>
                    <span className="text-sm font-medium text-green-700">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Strategy Process */}
        <div className="fade-in-up stagger-3">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Metodología de Content Marketing
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { step: "1", title: "Research", description: "Análisis de mercado y competencia", icon: "🔍" },
              { step: "2", title: "Strategy", description: "Desarrollo de estrategia integral", icon: "📋" },
              { step: "3", title: "Creation", description: "Producción de contenido optimizado", icon: "✍️" },
              { step: "4", title: "Distribution", description: "Distribución multicanal estratégica", icon: "📢" },
              { step: "5", title: "Analytics", description: "Medición y optimización continua", icon: "📊" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {phase.step}
                </div>
                <div className="text-2xl mb-2">{phase.icon}</div>
                <h3 className="text-lg font-bold text-blautech-primary mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="fade-in-up stagger-4">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Casos de Éxito en Marketing Digital
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                industry: "SaaS B2B",
                title: "Estrategia de Inbound Marketing",
                description: "Posicionamiento como thought leader en FinTech.",
                metrics: ["500% más leads", "Posición #1 en 50 keywords", "ROI 600%"]
              },
              {
                industry: "E-commerce",
                title: "SEO y Content Strategy",
                description: "Dominancia en búsquedas de productos.",
                metrics: ["400% tráfico orgánico", "250% ventas online", "80% share of voice"]
              },
              {
                industry: "Consultoría",
                title: "Thought Leadership",
                description: "Posicionamiento como expertos de la industria.",
                metrics: ["1M+ impresiones", "300% engagement", "150% nuevos clientes"]
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {caseStudy.industry}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blautech-primary mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="space-y-2">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Types */}
        <div className="fade-in-up stagger-5">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Tipos de Contenido que Creamos
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { type: "Blog Posts", icon: "📝", description: "Artículos SEO optimizados" },
              { type: "Whitepapers", icon: "📄", description: "Contenido técnico especializado" },
              { type: "Infografías", icon: "📊", description: "Contenido visual impactante" },
              { type: "Videos", icon: "🎥", description: "Contenido audiovisual engaging" },
              { type: "Case Studies", icon: "📋", description: "Historias de éxito detalladas" },
              { type: "Webinars", icon: "🎯", description: "Eventos educativos online" },
              { type: "Email Campaigns", icon: "📧", description: "Nurturing automatizado" },
              { type: "Social Media", icon: "📱", description: "Contenido para RRSS" }
            ].map((contentType, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-3xl mb-3">{contentType.icon}</div>
                <h3 className="text-lg font-bold text-blautech-primary mb-2">{contentType.type}</h3>
                <p className="text-gray-600 text-sm">{contentType.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up stagger-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Dominar tu Mercado Digital?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Obtén una auditoría gratuita de tu presencia digital y estrategia de contenido personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                AUDITORÍA GRATUITA
              </a>
              <a 
                href="#portfolio-marketing" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                VER PORTFOLIO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingPage;
