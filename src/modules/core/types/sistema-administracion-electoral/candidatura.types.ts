export interface Candidatura {
    id: number;
    eleccionId: number;
    cargoId: number;
    partidoId: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCandidaturaDto {
    eleccionId: number;
    cargoId: number;
    partidoId: number;
}

export interface UpdateCandidaturaDto {
    eleccionId?: number;
    cargoId?: number;
    partidoId?: number;
} 