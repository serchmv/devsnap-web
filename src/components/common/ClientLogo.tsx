import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ClientLogoProps {
  client: {
    name: string;
    logo: string;
    color: string;
  };
  className?: string;
  mobileWidth?: number;
  desktopWidth?: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({
  client,
  className = '',
  mobileWidth = 80,
  desktopWidth = 160
}) => {
  const [hasImageError, setHasImageError] = useState(false);

  const handleImageError = () => {
    setHasImageError(true);
  };

  if (hasImageError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${client.color} rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-white font-bold text-lg font-encode-sans">
          {client.name.substring(0, 2)}
        </span>
      </div>
    );
  }

  return (
    <OptimizedImage
      src={client.logo}
      alt={`${client.name} Logo`}
      className={`w-full h-full filter group-hover:drop-shadow-md transition-all duration-300 ${className}`}
      mobileWidth={mobileWidth}
      desktopWidth={desktopWidth}
      quality={90}
      onError={handleImageError}
    />
  );
};

export default ClientLogo;