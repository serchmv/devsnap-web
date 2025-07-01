import React from 'react';

interface APIMicroservicesPageProps {
  content: any;
}

const APIMicroservicesPage: React.FC<APIMicroservicesPageProps> = ({ content }) => {
  return (
    <section id="apis-microservicios" className="blautech-section bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="blautech-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6">
            <span className="text-4xl text-white">🔗</span>
          </div>
          <h1 className="blautech-title text-blautech-primary mb-4">
            APIs & Microservicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Construye arquitecturas modulares y escalables que conectan sistemas, optimizan recursos y permiten crecimiento empresarial sin límites.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Services */}
          <div className="fade-in-up stagger-1">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Servicios de Arquitectura Moderna
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "APIs RESTful y GraphQL",
                  description: "Desarrollo de interfaces robustas que conectan aplicaciones y servicios con performance optimizada.",
                  features: ["REST API design", "GraphQL endpoints", "OpenAPI documentation", "Rate limiting & security"]
                },
                {
                  title: "Arquitectura de Microservicios",
                  description: "Diseño e implementación de sistemas distribuidos que escalan independientemente según demanda.",
                  features: ["Service decomposition", "Container orchestration", "Circuit breakers", "Event-driven architecture"]
                },
                {
                  title: "Gateway de APIs",
                  description: "Centralización de gestión, seguridad y monitoreo de todas las APIs empresariales.",
                  features: ["API gateway management", "Authentication & authorization", "Traffic management", "Analytics & monitoring"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                  <h3 className="text-lg font-bold text-blautech-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Architecture Benefits */}
          <div className="fade-in-up stagger-2">
            <h2 className="text-2xl font-bold text-blautech-primary mb-8">
              Beneficios de Microservicios
            </h2>
            
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-8">
              <div className="space-y-4">
                {[
                  { icon: "⚡", text: "Escalabilidad independiente por servicio" },
                  { icon: "🛡️", text: "Tolerancia a fallos y alta disponibilidad" },
                  { icon: "🚀", text: "Despliegues independientes y continuos" },
                  { icon: "🔧", text: "Tecnologías específicas por microservicio" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
              <h3 className="text-lg font-bold text-blautech-primary mb-4">Stack Tecnológico</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Backend & APIs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "Java Spring", ".NET Core"].map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Containerización:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Kubernetes", "Docker Swarm", "OpenShift"].map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Message Brokers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Apache Kafka", "RabbitMQ", "Redis", "AWS SQS"].map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Approach */}
        <div className="fade-in-up stagger-3">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Metodología de Implementación
          </h2>
          
          <div className="grid md:grid-cols-6 gap-4 mb-16">
            {[
              { step: "1", title: "Domain Analysis", description: "Identificación de bounded contexts", icon: "🔍" },
              { step: "2", title: "Service Design", description: "Diseño de servicios independientes", icon: "🎨" },
              { step: "3", title: "API Specification", description: "Definición de contratos API", icon: "📋" },
              { step: "4", title: "Development", description: "Desarrollo e integración", icon: "⚙️" },
              { step: "5", title: "Testing", description: "Testing integral y E2E", icon: "🧪" },
              { step: "6", title: "Deployment", description: "Despliegue y monitoreo", icon: "🚀" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3 mx-auto">
                  {phase.step}
                </div>
                <div className="text-2xl mb-2">{phase.icon}</div>
                <h3 className="text-sm font-bold text-blautech-primary mb-1">{phase.title}</h3>
                <p className="text-gray-600 text-xs">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* API Types & Patterns */}
        <div className="fade-in-up stagger-4">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Tipos de APIs que Desarrollamos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                type: "REST APIs", 
                icon: "🌐", 
                description: "APIs estándar con JSON",
                features: ["HTTP methods", "Stateless", "Cacheable", "Uniform interface"]
              },
              { 
                type: "GraphQL", 
                icon: "⚡", 
                description: "Query language flexible",
                features: ["Single endpoint", "Strong typing", "Real-time", "Efficient queries"]
              },
              { 
                type: "WebSocket APIs", 
                icon: "🔄", 
                description: "Comunicación en tiempo real",
                features: ["Bidirectional", "Low latency", "Real-time", "Persistent connection"]
              },
              { 
                type: "Event-driven", 
                icon: "📡", 
                description: "Arquitectura basada en eventos",
                features: ["Async messaging", "Loose coupling", "Scalable", "Event sourcing"]
              }
            ].map((apiType, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{apiType.icon}</div>
                  <h3 className="text-lg font-bold text-blautech-primary">{apiType.type}</h3>
                  <p className="text-gray-600 text-sm">{apiType.description}</p>
                </div>
                <div className="space-y-2">
                  {apiType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Examples */}
        <div className="fade-in-up stagger-5">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Casos de Integración Exitosa
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                company: "Fintech Unicornio",
                challenge: "Arquitectura monolítica limitaba crecimiento",
                solution: "Migración completa a microservicios con 15 APIs",
                results: ["500% mejora en throughput", "99.99% uptime", "Despliegues 20x más rápidos", "Time-to-market reducido 70%"]
              },
              {
                company: "E-commerce Enterprise",
                challenge: "Integraciones complejas con múltiples sistemas",
                solution: "API Gateway centralizado con 50+ integraciones",
                results: ["Reducción 80% en errores", "APIs unificadas", "Monitoreo centralizado", "Seguridad enterprise"]
              }
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-orange-100">
                <h3 className="text-lg font-bold text-blautech-primary mb-4">{integration.company}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Desafío:</h4>
                    <p className="text-gray-600 text-sm">{integration.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Solución:</h4>
                    <p className="text-gray-600 text-sm">{integration.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Resultados:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {integration.results.map((result, resultIndex) => (
                        <span key={resultIndex} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium">
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

        {/* Monitoring & Security */}
        <div className="fade-in-up stagger-6">
          <h2 className="text-2xl font-bold text-blautech-primary text-center mb-12">
            Seguridad y Monitoreo de APIs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: "Seguridad",
                icon: "🛡️",
                items: ["OAuth 2.0 / JWT", "API Keys & Rate Limiting", "HTTPS/TLS encryption", "Input validation", "CORS policies"]
              },
              {
                category: "Monitoreo",
                icon: "📊",
                items: ["Real-time analytics", "Performance metrics", "Error tracking", "Usage patterns", "SLA monitoring"]
              },
              {
                category: "Documentación",
                icon: "📚",
                items: ["OpenAPI/Swagger", "Interactive docs", "Code examples", "SDK generation", "Versioning strategy"]
              }
            ].map((aspect, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{aspect.icon}</div>
                  <h3 className="text-lg font-bold text-blautech-primary">{aspect.category}</h3>
                </div>
                <div className="space-y-2">
                  {aspect.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up stagger-7">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Modernizar tu Arquitectura?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Nuestros arquitectos de software diseñarán una solución de microservicios escalable para tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                CONSULTORÍA ARQUITECTURAL
              </a>
              <a 
                href="#api-documentation" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                VER DOCUMENTACIÓN API
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIMicroservicesPage;
