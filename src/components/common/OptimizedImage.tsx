import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  mobileWidth?: number;
  desktopWidth?: number;
  quality?: number;
  placeholder?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  mobileWidth = 400,
  desktopWidth = 800,
  quality = 85,
  placeholder = '/images/placeholder.svg',
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const optimizedSrc = getOptimizedSrc(src);
    setCurrentSrc(optimizedSrc);
    setIsLoaded(false);
    setHasError(false);
  }, [src, isMobile]);

  const getOptimizedSrc = (originalSrc: string): string => {
    if (originalSrc.includes('placeholder') || originalSrc.includes('data:')) {
      return originalSrc;
    }

    const width = isMobile ? mobileWidth : desktopWidth;
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    
    if (extension && ['jpg', 'jpeg', 'png', 'webp'].includes(extension)) {
      const basePath = originalSrc.replace(/\.[^/.]+$/, '');
      const mobileSuffix = isMobile ? '-mobile' : '';
      
      return `${basePath}${mobileSuffix}.${extension === 'jpg' || extension === 'jpeg' ? 'webp' : extension}`;
    }
    
    return originalSrc;
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    if (onError) {
      onError(e);
    } else {
      // Fallback al placeholder usando React state en lugar de manipular DOM
      setCurrentSrc(placeholder);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-devsnap-secondary rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          willChange: 'opacity',
        }}
      />
    </div>
  );
};

export default OptimizedImage;