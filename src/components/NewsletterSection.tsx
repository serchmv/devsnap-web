import React, { useState } from 'react';

interface NewsletterSectionProps {
  content: any;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ content }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="blautech-section bg-blautech-gray">
      <div className="blautech-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="fade-in-up mb-8">
            <h2 className="blautech-title text-blautech-primary">
              {content.newsletter.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Mantente actualizado con las últimas tendencias en tecnología, 
              casos de éxito y novedades de Blautech.
            </p>
          </div>
          
          {/* Newsletter Form */}
          <div className="blautech-card max-w-2xl mx-auto fade-in-up stagger-1">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={content.newsletter.placeholder}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blautech-secondary focus:border-transparent text-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="blautech-btn-primary whitespace-nowrap"
                  >
                    {content.newsletter.button}
                  </button>
                </div>
                
                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  Al suscribirte, aceptas recibir emails de Blautech con información sobre 
                  tecnología, productos y servicios. Puedes desuscribirte en cualquier momento.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blautech-success rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-blautech-success mb-2">
                  ¡Suscripción Exitosa!
                </h3>
                <p className="text-gray-600">
                  Gracias por suscribirte. Pronto recibirás nuestro boletín con contenido exclusivo.
                </p>
              </div>
            )}
          </div>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 fade-in-up stagger-2">
            <div className="text-center">
              <div className="w-12 h-12 bg-blautech-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">📧</span>
              </div>
              <h4 className="font-semibold text-blautech-primary mb-2">Contenido Exclusivo</h4>
              <p className="text-sm text-gray-600">Insights y tendencias tecnológicas</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blautech-success rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-blautech-primary mb-2">Casos de Éxito</h4>
              <p className="text-sm text-gray-600">Historias reales de transformación</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blautech-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h4 className="font-semibold text-blautech-primary mb-2">Novedades</h4>
              <p className="text-sm text-gray-600">Primero en conocer nuevos servicios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
