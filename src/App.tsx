import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DnaSection from './components/DnaSection';
import ServicesSection from './components/ServicesSection';
import DetailedServicesSection from './components/DetailedServicesSection';
import ModernizationSection from './components/ModernizationSection';
import AboutUsSection from './components/AboutUsSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import ClientsSection from './components/ClientsSection';
import JoinUsSection from './components/JoinUsSection';
import TechCentersSection from './components/TechCentersSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

// Specialty Pages
import IAMachineLearningPage from './components/specialties/IAMachineLearningPage';
import AutomatizacionRPAPage from './components/specialties/AutomatizacionRPAPage';
import CloudMigrationPage from './components/specialties/CloudMigrationPage';
import ContentMarketingPage from './components/specialties/ContentMarketingPage';
import APIMicroservicesPage from './components/specialties/APIMicroservicesPage';
import CiberseguridadPage from './components/specialties/CiberseguridadPage';

function App() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/data/blautech-content.json');
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  // Handle routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash === 'ia-machine-learning') {
        setCurrentPage('ia-ml');
      } else if (hash === 'automatizacion-rpa') {
        setCurrentPage('automatizacion');
      } else if (hash === 'cloud-migration') {
        setCurrentPage('cloud');
      } else if (hash === 'content-marketing') {
        setCurrentPage('marketing');
      } else if (hash === 'apis-microservicios') {
        setCurrentPage('apis');
      } else if (hash === 'ciberseguridad') {
        setCurrentPage('security');
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-blautech-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
            <div className="w-12 h-12 bg-blautech-secondary rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blautech-secondary rounded-full"></div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">BLAUTECH</h2>
          <p className="text-white/70">Cargando experiencia digital...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error al cargar contenido</h2>
          <p className="text-red-500">Por favor, recarga la página</p>
        </div>
      </div>
    );
  }

  // Render specialty pages
  const renderSpecialtyPage = () => {
    switch (currentPage) {
      case 'ia-ml':
        return <IAMachineLearningPage content={content} />;
      case 'automatizacion':
        return <AutomatizacionRPAPage content={content} />;
      case 'cloud':
        return <CloudMigrationPage content={content} />;
      case 'marketing':
        return <ContentMarketingPage content={content} />;
      case 'apis':
        return <APIMicroservicesPage content={content} />;
      case 'security':
        return <CiberseguridadPage content={content} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header content={content} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero content={content} />
            <DnaSection content={content} />
            <ServicesSection content={content} />
            <DetailedServicesSection content={content} />
            <ModernizationSection content={content} />
            <AboutUsSection content={content} />
            <DifferentiatorsSection content={content} />
            <ClientsSection content={content} />
            <JoinUsSection content={content} />
            <TechCentersSection content={content} />
            <NewsletterSection content={content} />
          </>
        ) : (
          <>
            <div className="pt-20"></div> {/* Spacer for fixed header */}
            {renderSpecialtyPage()}
          </>
        )}
      </main>
      <Footer content={content} />
    </div>
  );
}

export default App;
