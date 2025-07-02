import React, { useState, useEffect, useRef } from 'react';
import { useConnectionSpeed } from '../../hooks/useConnectionSpeed';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  style?: React.CSSProperties;
  onLoadStart?: () => void;
  onLoadedData?: () => void;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  className = '',
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  style,
  onLoadStart,
  onLoadedData
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { isSlowConnection } = useConnectionSpeed();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const currentVideoRef = videoRef.current;
    if (!currentVideoRef) return;

    // Intersection Observer para lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    observer.observe(currentVideoRef);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, []);

  const getOptimizedSrc = (originalSrc: string): string => {
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    
    if (isMobile) {
      // En móviles, intentar cargar versión comprimida
      return `${basePath}-mobile.${extension}`;
    }
    
    return originalSrc;
  };

  const handleVideoLoadStart = () => {
    if (onLoadStart) onLoadStart();
  };

  const handleVideoLoadedData = () => {
    setIsLoaded(true);
    if (onLoadedData) onLoadedData();
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  // No cargar video en móviles con conexión lenta
  const shouldShowVideo = () => {
    if (isMobile && isSlowConnection) {
      return false;
    }
    return shouldLoadVideo;
  };

  const optimizedSrc = getOptimizedSrc(src);

  if (!shouldShowVideo()) {
    return (
      <div className={`relative ${className}`} style={style}>
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          {poster ? (
            <img 
              src={poster} 
              alt="Video poster" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-encode-sans">Video de fondo</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm font-encode-sans">Cargando video...</p>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
        onLoadStart={handleVideoLoadStart}
        onLoadedData={handleVideoLoadedData}
        onError={handleVideoError}
        style={style}
        preload={isMobile ? 'metadata' : 'auto'}
      >
        <source src={optimizedSrc} type="video/mp4" />
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
};

export default OptimizedVideo;