export interface AsignacionVotanteMesa {
    id: number;
    votanteId: string;
    mesaId: number;
    fechaAsignacion: string;
}

export interface CreateAsignacionVotanteMesaDto {
    votanteId: string;
    mesaId: number;
}

export interface UpdateAsignacionVotanteMesaDto {
    votanteId?: string;
    mesaId?: number;
} 