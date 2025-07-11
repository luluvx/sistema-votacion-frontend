import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_VOTACION_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getPapeletaHabilitada = () => {
  return instance.get('/papeletas/habilitada/');
};

export const registrarVoto = (papeletaId: number, candidatoId: number) => {
  return instance.post('/votos/', {
    papeleta: papeletaId,
    candidato_id: candidatoId,
  });
};

export const getResultados = () => {
  return instance.get('/resultados/');
};

export default instance; 