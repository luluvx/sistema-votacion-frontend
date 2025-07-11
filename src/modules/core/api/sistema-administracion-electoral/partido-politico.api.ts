import instance from './instance.api';
import type { PartidoPolitico, CreatePartidoPoliticoDto, UpdatePartidoPoliticoDto } from '../../types/sistema-administracion-electoral/partido-politico.types';

export const getPartidosPoliticos = () => instance.get<PartidoPolitico[]>('/partidos-politicos');
export const getPartidoPolitico = (id: number) => instance.get<PartidoPolitico>(`/partidos-politicos/${id}`);
export const createPartidoPolitico = (data: CreatePartidoPoliticoDto) => instance.post<PartidoPolitico>('/partidos-politicos', data);
export const updatePartidoPolitico = (id: number, data: UpdatePartidoPoliticoDto) => instance.put<PartidoPolitico>(`/partidos-politicos/${id}`, data);
export const deletePartidoPolitico = (id: number) => instance.delete(`/partidos-politicos/${id}`); 