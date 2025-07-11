import { useEffect, useRef } from 'react';

interface PapeletaSocketEvents {
  onHabilitar?: (data: any) => void;
  onCerrar?: (data: any) => void;
}

const WS_URL = import.meta.env.VITE_WS_PAPELETA_URL || 'ws://localhost:8000/ws/papeleta/';

export function usePapeletaSocket({ onHabilitar, onCerrar }: PapeletaSocketEvents) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    wsRef.current = new window.WebSocket(WS_URL);
    wsRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'habilitar_papeleta' && onHabilitar) {
          onHabilitar(data);
        }
        if (data.type === 'cerrar_papeleta' && onCerrar) {
          onCerrar(data);
        }
      } catch {}
    };
    return () => {
      wsRef.current?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
} 