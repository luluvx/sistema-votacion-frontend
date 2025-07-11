import { useState } from 'react';
import api from '../api/instance.api';

export interface Votante {
  nombreCompleto: string;
  recintoNombre: string;
  recintoId: number;
  fotoVotante?: string;
}

export function useBuscarVotante() {
  const [votante, setVotante] = useState<Votante | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const buscarVotante = async (ci: string) => {
    setLoading(true);
    setError(null);
    setVotante(null);
    try {
      const res = await api.get(`/votantes/buscar/?ci=${ci}`);
      setVotante(res.data);
      console.log('Datos recibidos del votante:', res.data);
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError('Votante no encontrado.');
      } else if (err.response && err.response.status === 400) {
        setError('Debe ingresar un CI válido.');
      } else {
        setError('Error al buscar votante.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { votante, loading, error, buscarVotante, setVotante, setError };
} 