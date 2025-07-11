import instance from './instance.api';
import type { Eleccion, CreateEleccionDto, UpdateEleccionDto } from '../../types/sistema-administracion-electoral/eleccion.types';

export const getElecciones = () => instance.get<Eleccion[]>('/elecciones');
export const getEleccion = (id: number) => instance.get<Eleccion>(`/elecciones/${id}`);
export const createEleccion = (data: CreateEleccionDto) => instance.post<Eleccion>('/elecciones', data);
export const updateEleccion = (id: number, data: UpdateEleccionDto) => instance.put<Eleccion>(`/elecciones/${id}`, data);
export const deleteEleccion = (id: number) => instance.delete(`/elecciones/${id}`); 