export interface Jurado {
    id: number;
    votanteId: string;
    mesaId: number;
    fechaCreacion: string;
}

export interface CreateJuradoDto {
    votanteId: string;
    mesaId: number;
}

export interface UpdateJuradoDto {
    votanteId?: string;
    mesaId?: number;
} 