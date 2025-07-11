import { useState } from 'react';
import api from '../api/instance.api';

export function useHabilitarPapeleta() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const habilitarPapeleta = async (ci: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await api.post('/papeletas/habilitar/', { ci });
      setSuccess(true);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Error al habilitar la papeleta.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, habilitarPapeleta, setSuccess, setError };
} 