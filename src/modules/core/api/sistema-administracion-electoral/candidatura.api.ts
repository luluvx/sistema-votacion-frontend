import instance from './instance.api';
import type { Candidatura, CreateCandidaturaDto, UpdateCandidaturaDto } from '../../types/sistema-administracion-electoral/candidatura.types';

export const getCandidaturas = () => instance.get<Candidatura[]>('/candidaturas');
export const getCandidatura = (id: number) => instance.get<Candidatura>(`/candidaturas/${id}`);
export const createCandidatura = (data: CreateCandidaturaDto) => instance.post<Candidatura>('/candidaturas', data);
export const updateCandidatura = (id: number, data: UpdateCandidaturaDto) => instance.put<Candidatura>(`/candidaturas/${id}`, data);
export const deleteCandidatura = (id: number) => instance.delete(`/candidaturas/${id}`); 