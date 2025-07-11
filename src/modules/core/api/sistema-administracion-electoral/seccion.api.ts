import instance from './instance.api';
import type { Seccion, CreateSeccionDto, UpdateSeccionDto } from '../../types/sistema-administracion-electoral/seccion.types';

export const getSecciones = () => instance.get<Seccion[]>('/secciones');
export const getSeccion = (id: number) => instance.get<Seccion>(`/secciones/${id}`);
export const createSeccion = (data: CreateSeccionDto) => instance.post<Seccion>('/secciones', data);
export const updateSeccion = (id: number, data: UpdateSeccionDto) => instance.put<Seccion>(`/secciones/${id}`, data);
export const deleteSeccion = (id: number) => instance.delete(`/secciones/${id}`); 