import instance from './instance.api';
import type { Candidato, CreateCandidatoDto, UpdateCandidatoDto } from '../../types/sistema-administracion-electoral/candidato.types';

export const getCandidatos = () => {
    console.log('📡 API - Obteniendo candidatos...');
    return instance.get<Candidato[]>('/candidatos').then(response => {
        console.log('✅ API - Candidatos obtenidos:', response.data);
        return response;
    }).catch(error => {
        console.error('❌ API - Error obteniendo candidatos:', error);
        throw error;
    });
};

export const getCandidato = (id: number) => {
    console.log('📡 API - Obteniendo candidato ID:', id);
    return instance.get<Candidato>(`/candidatos/${id}`).then(response => {
        console.log('✅ API - Candidato obtenido:', response.data);
        return response;
    }).catch(error => {
        console.error('❌ API - Error obteniendo candidato:', error);
        throw error;
    });
};

export const createCandidato = (data: CreateCandidatoDto, file?: File) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
    });
    if (file) formData.append('file', file);
    return instance.post<Candidato>('/candidatos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};

export const updateCandidato = (id: number, data: UpdateCandidatoDto, file?: File) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) formData.append(key, value as string);
    });
    if (file) formData.append('file', file);
    return instance.put<Candidato>(`/candidatos/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};

export const deleteCandidato = (id: number) => instance.delete(`/candidatos/${id}`); 