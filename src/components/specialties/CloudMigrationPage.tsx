import React from 'react';

interface CloudMigrationPageProps {
  content: any;
}

const CloudMigrationPage: React.FC<CloudMigrationPageProps> = ({ content }) => {
  return (
    <section id="cloud-migration" className="blautech-section bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="blautech-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6">
            <span className="text-4xl text-white">☁️</span>
          </div>
          <h1 className="blautech-title text-blautech-primary mb-4">
            Migración a la Nube
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acelera tu transformación digital migrando a la nube con estrategias probadas que garantizan seguridad, escalabilidad y optimización de costos.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Services */}
          <div className="fade-in-up stagger-1">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Servicios de Migración Cloud
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "AWS & Azure Migration",
                  description: "Migración completa de infraestructura y aplicaciones a las principales plataformas cloud del mercado.",
                  features: ["Assessment de infraestructura", "Plan de migración", "Ejecución controlada", "Optimización post-migración"]
                },
                {
                  title: "Arquitectura Serverless",
                  description: "Diseño e implementación de arquitecturas sin servidor que escalan automáticamente según demanda.",
                  features: ["Lambda Functions", "Event-driven architecture", "Auto-scaling", "Pay-per-use optimization"]
                },
                {
                  title: "Backup y Recuperación",
                  description: "Estrategias de respaldo y disaster recovery que garantizan continuidad de negocio en la nube.",
                  features: ["RTO < 1 hora", "RPO < 15 minutos", "Multi-region backup", "Automated testing"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cyan-100">
                  <h3 className="text-lg font-bold text-blautech-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cloud Providers */}
          <div className="fade-in-up stagger-2">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Partners Cloud Certificados
            </h2>
            
            <div className="space-y-6">
              {/* AWS */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                <div className="flex items-center space-x-4 mb-4">
                  <img src="/images/tech-logos/aws-logo.png" alt="AWS" className="w-12 h-12 object-contain" />
                  <div>
                    <h3 className="text-lg font-bold text-orange-600">Amazon Web Services</h3>
                    <p className="text-sm text-gray-600">Advanced Consulting Partner</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["EC2", "S3", "RDS", "Lambda", "CloudFront", "VPC"].map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Azure */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center space-x-4 mb-4">
                  <img src="/images/tech-logos/azure-logo.png" alt="Azure" className="w-12 h-12 object-contain" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-600">Microsoft Azure</h3>
                    <p className="text-sm text-gray-600">Gold Partner</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["Virtual Machines", "App Service", "SQL Database", "Functions", "CDN", "Virtual Network"].map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Migration Benefits */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white mt-6">
              <h3 className="text-lg font-bold mb-4">Beneficios de la Migración</h3>
              <div className="space-y-3">
                {[
                  { icon: "💰", text: "Reducción de costos IT hasta 40%" },
                  { icon: "🚀", text: "Mejora en performance hasta 3x" },
                  { icon: "🔒", text: "Seguridad enterprise nivel bancario" },
                  { icon: "📈", text: "Escalabilidad automática 99.99%" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-xl">{benefit.icon}</span>
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Migration Journey */}
        <div className="fade-in-up stagger-3">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Metodología de Migración Probada
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { phase: "1", title: "Assess", description: "Análisis completo de infraestructura actual", duration: "2-3 semanas" },
              { phase: "2", title: "Plan", description: "Estrategia de migración personalizada", duration: "1-2 semanas" },
              { phase: "3", title: "Migrate", description: "Ejecución controlada por fases", duration: "4-8 semanas" },
              { phase: "4", title: "Optimize", description: "Optimización de recursos y costos", duration: "2-3 semanas" },
              { phase: "5", title: "Operate", description: "Monitoreo y soporte continuo", duration: "Ongoing" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {phase.phase}
                </div>
                <h3 className="text-lg font-bold text-blautech-primary mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{phase.description}</p>
                <span className="text-xs text-cyan-600 font-medium">{phase.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="fade-in-up stagger-4">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Historias de Éxito
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                company: "FinTech Líder",
                challenge: "Infraestructura legacy costosa y limitada",
                solution: "Migración completa a AWS con arquitectura serverless",
                results: ["60% reducción de costos", "99.99% uptime", "Escalabilidad automática"]
              },
              {
                company: "E-commerce Enterprise",
                challenge: "Picos de tráfico causaban downtime",
                solution: "Migración a Azure con auto-scaling",
                results: ["Zero downtime", "3x mejor performance", "Crecimiento 500% sin problemas"]
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-cyan-100">
                <h3 className="text-lg font-bold text-blautech-primary mb-4">{story.company}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Desafío:</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solución:</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Resultados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.results.map((result, resultIndex) => (
                        <span key={resultIndex} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up stagger-5">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Migrar a la Nube?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Obtén un assessment gratuito de tu infraestructura y plan de migración personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-cyan-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                ASSESSMENT GRATUITO
              </a>
              <a 
                href="#calculadora-cloud" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                CALCULADORA DE COSTOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationPage;
