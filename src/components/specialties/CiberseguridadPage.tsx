import React from 'react';

interface CiberseguridadPageProps {
  content: any;
}

const CiberseguridadPage: React.FC<CiberseguridadPageProps> = ({ content }) => {
  return (
    <section id="ciberseguridad" className="blautech-section bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="blautech-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block p-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl mb-6">
            <span className="text-4xl text-white">🛡️</span>
          </div>
          <h1 className="blautech-title text-blautech-primary mb-4">
            Ciberseguridad & DevSecOps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protege tu infraestructura digital con protocolos de seguridad avanzados, monitoreo continuo y estrategias de seguridad integradas en el desarrollo.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Services */}
          <div className="fade-in-up stagger-1">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Servicios de Ciberseguridad
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Auditorías de Seguridad",
                  description: "Evaluación integral de vulnerabilidades y assessment de riesgos para identificar y mitigar amenazas.",
                  features: ["Penetration testing", "Vulnerability assessment", "Risk analysis", "Compliance auditing"]
                },
                {
                  title: "Implementación ZERO TRUST",
                  description: "Arquitectura de seguridad que no confía en ningún dispositivo o usuario por defecto, verificando cada acceso.",
                  features: ["Identity verification", "Multi-factor authentication", "Microsegmentation", "Continuous monitoring"]
                },
                {
                  title: "Monitoreo 24/7",
                  description: "Centro de operaciones de seguridad (SOC) que detecta, analiza y responde a amenazas en tiempo real.",
                  features: ["SIEM/SOAR platforms", "Threat intelligence", "Incident response", "Forensic analysis"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
                  <h3 className="text-lg font-bold text-blautech-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - DevSecOps */}
          <div className="fade-in-up stagger-2">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              DevSecOps Integration
            </h2>
            
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-white mb-8">
              <div className="space-y-4">
                {[
                  { icon: "🔒", text: "Seguridad integrada desde el desarrollo" },
                  { icon: "🤖", text: "Testing automatizado de vulnerabilidades" },
                  { icon: "📊", text: "Compliance continuo y auditable" },
                  { icon: "⚡", text: "Deployment seguro y monitorizado" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Tools */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
              <h3 className="text-lg font-bold text-blautech-primary mb-4">Herramientas de Seguridad</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">SIEM & Monitoring:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Splunk", "ELK Stack", "QRadar", "Sentinel"].map((tool, index) => (
                      <span key={index} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Vulnerability Management:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Nessus", "OpenVAS", "Qualys", "Rapid7"].map((tool, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">DevSecOps Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SAST", "DAST", "SCA", "Container Security"].map((tool, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Framework */}
        <div className="fade-in-up stagger-3">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Framework de Seguridad Integral
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { phase: "1", title: "Assess", description: "Evaluación de riesgos y vulnerabilidades", icon: "🔍" },
              { phase: "2", title: "Protect", description: "Implementación de controles de seguridad", icon: "🛡️" },
              { phase: "3", title: "Detect", description: "Monitoreo y detección de amenazas", icon: "👁️" },
              { phase: "4", title: "Respond", description: "Respuesta rápida a incidentes", icon: "⚡" },
              { phase: "5", title: "Recover", description: "Recuperación y continuidad de negocio", icon: "🔄" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {phase.phase}
                </div>
                <div className="text-2xl mb-2">{phase.icon}</div>
                <h3 className="text-lg font-bold text-blautech-primary mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="fade-in-up stagger-4">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Compliance y Estándares
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { standard: "ISO 27001", description: "Sistema de gestión de seguridad de la información", icon: "📋" },
              { standard: "SOC 2", description: "Controles de seguridad para organizaciones de servicios", icon: "🏢" },
              { standard: "GDPR", description: "Reglamento General de Protección de Datos", icon: "🔐" },
              { standard: "PCI DSS", description: "Estándar de seguridad para datos de tarjetas", icon: "💳" }
            ].map((std, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-3xl mb-4">{std.icon}</div>
                <h3 className="text-lg font-bold text-blautech-primary mb-3">{std.standard}</h3>
                <p className="text-gray-600 text-sm">{std.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Landscape */}
        <div className="fade-in-up stagger-5">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Amenazas que Combatimos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: "Malware & Ransomware",
                threats: ["Cryptolockers", "Trojans", "Spyware", "Rootkits"],
                description: "Detección y prevención de software malicioso avanzado."
              },
              {
                category: "Ataques de Red",
                threats: ["DDoS", "Man-in-the-middle", "DNS poisoning", "Port scanning"],
                description: "Protección contra ataques de infraestructura de red."
              },
              {
                category: "Ingeniería Social",
                threats: ["Phishing", "Spear phishing", "Pretexting", "Baiting"],
                description: "Concientización y protección contra manipulación humana."
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
                <h3 className="text-lg font-bold text-blautech-primary mb-3">{category.category}</h3>
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                <div className="space-y-2">
                  {category.threats.map((threat, threatIndex) => (
                    <div key={threatIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{threat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Metrics */}
        <div className="fade-in-up stagger-6">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Métricas de Seguridad Comprobadas
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { metric: "99.9%", description: "Detección de amenazas", icon: "🎯" },
              { metric: "<5 min", description: "Tiempo de respuesta", icon: "⏱️" },
              { metric: "0", description: "Brechas de seguridad", icon: "🛡️" },
              { metric: "24/7", description: "Monitoreo continuo", icon: "👁️" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center border border-red-100">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-red-600 mb-2">{stat.metric}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up stagger-7">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Fortalecer tu Ciberseguridad?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Obtén una evaluación gratuita de seguridad y plan de protección personalizado para tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                ASSESSMENT DE SEGURIDAD
              </a>
              <a 
                href="#penetration-testing" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                SOLICITAR PENTEST
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CiberseguridadPage;
