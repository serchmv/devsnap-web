import React from 'react';
import OptimizedVideo from './common/OptimizedVideo';
import ClientLogo from './common/ClientLogo';

interface ClientsSectionProps {
  content: any;
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ content }) => {
  // Clientes reales con sus detalles
  const realClients = [
    {
      name: "Oracle",
      logo: "/images/clients/oracle-logo.png",
      sector: "Tecnología",
      color: "from-red-600 to-red-700"
    },
    {
      name: "Movistar",
      logo: "/images/clients/movistar-logo.png", 
      sector: "Telecomunicaciones",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "IZZI Telecom",
      logo: "/images/clients/izzi-logo.png",
      sector: "Telecomunicaciones", 
      color: "from-green-600 to-green-700"
    },
    {
      name: "Televisa",
      logo: "/images/clients/televisa-logo.png",
      sector: "Media & Entertainment",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "BBVA",
      logo: "/images/clients/bbva-logo.png",
      sector: "Servicios Financieros",
      color: "from-blue-700 to-blue-800"
    }
  ];

  return (
    <section className="relative devsnap-section overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <OptimizedVideo
          src="/videos/junta.mp4"
          className="w-full h-full"
          poster="/images/video-poster.jpg"
          style={{ filter: 'blur(4px) brightness(0.3)' }}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        />
      </div>

      {/* White Overlay */}
      <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm"></div>
      
      <div className="relative z-20 devsnap-container">
        {/* Title */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="devsnap-title text-devsnap-primary font-encode-sans mb-4">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-encode-sans">
            Colaboramos con líderes de la industria para impulsar su transformación digital
          </p>
        </div>
        
        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {realClients.map((client, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/95 hover:shadow-2xl transition-all duration-500 hover:scale-105 fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo Container */}
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gray-50 rounded-xl mx-auto flex items-center justify-center p-3 group-hover:bg-white transition-colors duration-300">
                  <ClientLogo
                    client={client}
                    mobileWidth={80}
                    desktopWidth={160}
                  />
                </div>
              </div>
              
              {/* Client Info */}
              <div className="text-center">
                <h3 className="font-bold text-devsnap-primary text-lg mb-2 font-encode-sans group-hover:text-devsnap-secondary transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600 font-encode-sans">
                  {client.sector}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${client.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-devsnap-secondary to-devsnap-success rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">📈</span>
            </div>
            <h4 className="text-2xl font-bold text-devsnap-primary mb-2 font-encode-sans">5+</h4>
            <p className="text-gray-600 font-encode-sans">Empresas Fortune 500</p>
          </div>

          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-devsnap-success to-devsnap-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h4 className="text-2xl font-bold text-devsnap-primary mb-2 font-encode-sans">100%</h4>
            <p className="text-gray-600 font-encode-sans">Proyectos Exitosos</p>
          </div>

          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-devsnap-accent to-devsnap-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">⭐</span>
            </div>
            <h4 className="text-2xl font-bold text-devsnap-primary mb-2 font-encode-sans">3</h4>
            <p className="text-gray-600 font-encode-sans">Sectores Principales</p>
          </div>
        </div>

        {/* Partnership Message */}
        <div className="text-center fade-in-up">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-devsnap-secondary to-devsnap-success text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-2xl">🤝</span>
            <span className="font-semibold font-encode-sans">Socios estratégicos en transformación digital</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;