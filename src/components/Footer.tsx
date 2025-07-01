import React from 'react';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  content: any;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const socialIcons = {
    Facebook: Facebook,
    LinkedIn: Linkedin,
    YouTube: Youtube,
    Instagram: Instagram,
    Spotify: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.599-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021v-.06zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    TikTok: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    )
  };

  return (
    <footer id="contacto" className="bg-blautech-primary text-white">
      {/* Main Footer Content */}
      <div className="blautech-section">
        <div className="blautech-container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 fade-in-up">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blautech-secondary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">BLAUTECH</span>
                  <span className="text-sm font-light text-gray-300">SIMPLIFYING TECH</span>
                </div>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6 max-w-md">
                Simplificamos la adopción de la tecnología creando soluciones empresariales ágiles 
                para las empresas más importantes de Latinoamérica.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <span className="text-white/90">contacto@blautech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📱</span>
                  <span className="text-white/90">+52 55 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🌐</span>
                  <span className="text-white/90">15+ países de América</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="fade-in-up stagger-1">
              <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {content.footer.links.map((link: any, index: number) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-2 h-2 bg-blautech-secondary rounded-full"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#newsletter"
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-blautech-success rounded-full"></span>
                    <span>Newsletter</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className="fade-in-up stagger-2">
              <h3 className="text-xl font-bold mb-6">Síguenos</h3>
              <div className="grid grid-cols-3 gap-3">
                {content.footer.socialMedia.map((social: any, index: number) => {
                  const IconComponent = socialIcons[social.platform as keyof typeof socialIcons];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      title={social.platform}
                    >
                      {IconComponent && <IconComponent />}
                    </a>
                  );
                })}
              </div>
              
              {/* Newsletter CTA */}
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">📧 Boletín Semanal</h4>
                <p className="text-sm text-white/80 mb-3">
                  Recibe insights tecnológicos directamente en tu email
                </p>
                <a 
                  href="#newsletter" 
                  className="text-blautech-secondary hover:text-white font-medium text-sm transition-colors duration-300"
                >
                  Suscribirse →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="blautech-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2024 Blautech. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-white/70">Hecho con</span>
              <span className="text-red-400">❤️</span>
              <span className="text-white/70">por Solution Makers</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Términos de Uso
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacidad
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
