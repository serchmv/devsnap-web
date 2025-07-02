import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface TechLogoProps {
  tech: {
    name: string;
    logo: string;
    shortName: string;
    color: string;
  };
  className?: string;
  mobileWidth?: number;
  desktopWidth?: number;
}

const TechLogo: React.FC<TechLogoProps> = ({
  tech,
  className = '',
  mobileWidth = 64,
  desktopWidth = 128
}) => {
  const [hasImageError, setHasImageError] = useState(false);

  const handleImageError = () => {
    setHasImageError(true);
  };

  if (hasImageError) {
    return (
      <span className="text-xl font-bold text-gray-600 font-encode-sans">
        {tech.shortName}
      </span>
    );
  }

  return (
    <OptimizedImage
      src={tech.logo}
      alt={tech.name}
      className={`w-full h-full filter group-hover:drop-shadow-md transition-all duration-300 ${className}`}
      mobileWidth={mobileWidth}
      desktopWidth={desktopWidth}
      quality={85}
      onError={handleImageError}
    />
  );
};

export default TechLogo;