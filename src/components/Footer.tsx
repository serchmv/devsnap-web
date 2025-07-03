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
  };

  return (
    <footer id="contacto" className="bg-devsnap-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 mb-6">
          {/* Logo & Company */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <img 
                src="/images/DS.png" 
                alt="DevSnap Logo" 
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-encode-sans">DEVSNAP</span>
                <span className="text-xs font-light text-gray-300 font-encode-sans">Solutions Makers</span>
              </div>
            </div>
            <p className="text-white/80 text-sm max-w-xs font-encode-sans">
              Transformación digital profesional y soluciones tecnológicas innovadoras
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-sm">📧</span>
                <span className="text-white/90 text-sm font-encode-sans">contacto@devsnap.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-sm">📱</span>
                <span className="text-white/90 text-sm font-encode-sans">+52 55 7847 0070</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-end space-x-3 mt-4">
              {content.footer.socialMedia.slice(0, 4).map((social: any, index: number) => {
                const IconComponent = socialIcons[social.platform as keyof typeof socialIcons];
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    title={social.platform}
                  >
                    {IconComponent && <IconComponent size={16} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-white/70">
            <div className="font-encode-sans">
              © 2024 DevSnap. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-4 font-encode-sans">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Términos
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacidad
              </a>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Hecho con</span>
                <span className="text-red-400">❤️</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
