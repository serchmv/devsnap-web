import React from 'react';

interface ClientsSectionProps {
  content: any;
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ content }) => {
  return (
    <section className="devsnap-section bg-devsnap-gray">
      <div className="devsnap-container">
        {/* Title */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="devsnap-title text-devsnap-primary">
            {content.clients.title}
          </h2>
        </div>
        
        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {content.clients.logos.map((client: string, index: number) => (
            <div 
              key={index}
              className={`devsnap-card text-center py-8 hover:scale-105 transition-all duration-300 fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Client Logo Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-devsnap-secondary to-devsnap-success rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {client.substring(0, 2).toUpperCase()}
                </span>
              </div>
              
              {/* Client Name */}
              <h3 className="font-semibold text-devsnap-primary text-sm leading-tight">
                {client}
              </h3>
              
              {/* Decorative Element */}
              <div className="mt-3 w-8 h-1 bg-gradient-to-r from-devsnap-secondary to-devsnap-success rounded-full mx-auto opacity-60"></div>
            </div>
          ))}
        </div>
        
        {/* Additional Content */}
        <div className="mt-16 text-center fade-in-up stagger-4">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Trabajamos con las empresas más importantes de Latinoamérica, 
              ayudándolas a transformar sus operaciones digitales y alcanzar 
              sus objetivos de crecimiento tecnológico.
            </p>
            
            {/* Client Categories */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-devsnap-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">📱</span>
                </div>
                <h4 className="font-semibold text-devsnap-primary mb-2">Telecomunicaciones</h4>
                <p className="text-sm text-gray-600">Líderes en conectividad regional</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-devsnap-success rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">🏦</span>
                </div>
                <h4 className="font-semibold text-devsnap-primary mb-2">Servicios Financieros</h4>
                <p className="text-sm text-gray-600">Bancos e instituciones financieras</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-devsnap-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">🛍️</span>
                </div>
                <h4 className="font-semibold text-devsnap-primary mb-2">Retail & E-commerce</h4>
                <p className="text-sm text-gray-600">Experiencias comerciales digitales</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership Message */}
        <div className="mt-12 text-center fade-in-up stagger-5">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-devsnap-secondary to-devsnap-success text-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-2xl">🤝</span>
            <span className="font-semibold">Socios estratégicos en transformación digital</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
