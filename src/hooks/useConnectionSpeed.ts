import { useState, useEffect } from 'react';

interface ConnectionInfo {
  isSlowConnection: boolean;
  effectiveType: string | null;
  downlink: number | null;
  rtt: number | null;
}

export const useConnectionSpeed = (): ConnectionInfo => {
  const [connectionInfo, setConnectionInfo] = useState<ConnectionInfo>({
    isSlowConnection: false,
    effectiveType: null,
    downlink: null,
    rtt: null
  });

  useEffect(() => {
    const updateConnectionInfo = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          const isSlowConnection = 
            connection.effectiveType === 'slow-2g' || 
            connection.effectiveType === '2g' ||
            (connection.downlink && connection.downlink < 1.5);

          setConnectionInfo({
            isSlowConnection,
            effectiveType: connection.effectiveType || null,
            downlink: connection.downlink || null,
            rtt: connection.rtt || null
          });
        }
      }
    };

    // Verificar conexión inicial
    updateConnectionInfo();

    // Escuchar cambios en la conexión
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        connection.addEventListener('change', updateConnectionInfo);
        
        return () => {
          connection.removeEventListener('change', updateConnectionInfo);
        };
      }
    }
  }, []);

  return connectionInfo;
};