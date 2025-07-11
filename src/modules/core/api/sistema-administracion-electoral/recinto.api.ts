import instance from './instance.api';
import type { Recinto, CreateRecintoDto, UpdateRecintoDto } from '../../types/sistema-administracion-electoral/recinto.types';

export const getRecintos = () => instance.get<Recinto[]>('/recintos');
export const getRecinto = (id: number) => instance.get<Recinto>(`/recintos/${id}`);
export const createRecinto = (data: CreateRecintoDto) => instance.post<Recinto>('/recintos', data);
export const updateRecinto = (id: number, data: UpdateRecintoDto) => instance.put<Recinto>(`/recintos/${id}`, data);
export const deleteRecinto = (id: number) => instance.delete(`/recintos/${id}`);

export const getPublicRecintos = () => instance.get<Recinto[]>('/recintos/public');
export const getPublicRecinto = (id: number) => instance.get<Recinto>(`/recintos/public/${id}`); 