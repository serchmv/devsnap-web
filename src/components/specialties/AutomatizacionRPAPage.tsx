import React from 'react';

interface AutomatizacionRPAPageProps {
  content: any;
}

const AutomatizacionRPAPage: React.FC<AutomatizacionRPAPageProps> = ({ content }) => {
  return (
    <section id="automatizacion-rpa" className="devsnap-section bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="devsnap-container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-6">
            <span className="text-4xl text-white">⚙️</span>
          </div>
          <h1 className="devsnap-title text-devsnap-primary mb-4">
            Automatización de Procesos (RPA)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Libera el potencial de tu equipo automatizando tareas repetitivas con robots de software que trabajan 24/7 con precisión perfecta.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Services */}
          <div className="fade-in-up stagger-1">
            <h2 className="text-2xl font-bold text-devsnap-primary mb-8">
              Soluciones de Automatización
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Automatización de Facturación",
                  description: "Robots que procesan facturas desde la recepción hasta el pago, eliminando errores humanos y acelerando flujos.",
                  features: ["Extracción de datos OCR", "Validación automática", "Integración ERP", "Notificaciones inteligentes"]
                },
                {
                  title: "Procesamiento de Documentos",
                  description: "Digitalización y clasificación automática de documentos con IA para gestión eficiente de archivos.",
                  features: ["Clasificación inteligente", "Extracción de datos", "Validación de formularios", "Archivo automático"]
                },
                {
                  title: "Workflows de Aprobación",
                  description: "Sistemas que automatizan procesos de aprobación con reglas de negocio y escalamiento inteligente.",
                  features: ["Enrutamiento inteligente", "Escalamiento automático", "Notificaciones en tiempo real", "Auditoría completa"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                  <h3 className="text-lg font-bold text-devsnap-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="fade-in-up stagger-2">
            <h2 className="text-2xl font-bold text-devsnap-primary mb-8">
              ROI Comprobado
            </h2>
            
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white mb-8">
              <div className="space-y-4">
                {[
                  { icon: "⚡", text: "Velocidad 10x más rápida que procesos manuales" },
                  { icon: "🎯", text: "99.9% de precisión en tareas repetitivas" },
                  { icon: "💰", text: "ROI promedio del 200% en primer año" },
                  { icon: "🕐", text: "Operación 24/7 sin interrupciones" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Process */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-bold text-devsnap-primary mb-4">Proceso de Implementación</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Análisis de Procesos", duration: "1-2 semanas" },
                  { step: "2", title: "Diseño de Automatización", duration: "2-3 semanas" },
                  { step: "3", title: "Desarrollo y Testing", duration: "3-4 semanas" },
                  { step: "4", title: "Implementación", duration: "1 semana" },
                  { step: "5", title: "Monitoreo y Optimización", duration: "Continuo" }
                ].map((phase, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-blue-900">{phase.title}</p>
                      <p className="text-sm text-blue-600">{phase.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="fade-in-up stagger-3">
          <h2 className="text-2xl font-bold text-devsnap-primary text-center mb-12">
            Industrias que Transformamos
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { industry: "Banca", icon: "🏦", description: "Procesamiento de créditos, KYC automático, compliance" },
              { industry: "Seguros", icon: "🛡️", description: "Claims processing, underwriting, customer onboarding" },
              { industry: "Manufactura", icon: "🏭", description: "Control de inventarios, órdenes de compra, reporting" },
              { industry: "Retail", icon: "🛍️", description: "Gestión de proveedores, pricing, análisis de ventas" }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold text-devsnap-primary mb-3">{industry.industry}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up stagger-4">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Automatiza tus Procesos Hoy Mismo
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Identifica oportunidades de automatización en tu empresa con nuestro assessment gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                ASSESSMENT GRATUITO DE RPA
              </a>
              <a 
                href="#demo-rpa" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                VER DEMO EN VIVO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatizacionRPAPage;
