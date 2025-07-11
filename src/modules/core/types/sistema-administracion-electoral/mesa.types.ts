import type { Recinto } from './recinto.types';

export interface Mesa {
    id: number;
    numero: number;
    recintoId: number;
    recinto?: Recinto;
}

export interface CreateMesaDto {
    numero: number;
    recintoId: number;
}

export interface UpdateMesaDto {
    numero?: number;
    recintoId?: number;
} 