import instance from './instance.api';
import type { Cargo, CreateCargoDto, UpdateCargoDto } from '../../types/sistema-administracion-electoral/cargo.types';

export const getCargos = () => instance.get<Cargo[]>('/cargos');
export const getCargo = (id: number) => instance.get<Cargo>(`/cargos/${id}`);
export const createCargo = (data: CreateCargoDto) => instance.post<Cargo>('/cargos', data);
export const updateCargo = (id: number, data: UpdateCargoDto) => instance.put<Cargo>(`/cargos/${id}`, data);
export const deleteCargo = (id: number) => instance.delete(`/cargos/${id}`); 