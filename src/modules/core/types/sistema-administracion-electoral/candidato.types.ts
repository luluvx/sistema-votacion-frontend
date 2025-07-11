export interface Candidato {
    id: number;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    cedula: string;
    fechaNacimiento: string;
    profesion?: string;
    biografia?: string;
    fotoUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCandidatoDto {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    cedula: string;
    fechaNacimiento: string;
    profesion?: string;
    biografia?: string;
    fotoUrl?: string;
}

export interface UpdateCandidatoDto {
    nombres?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    cedula?: string;
    fechaNacimiento?: string;
    profesion?: string;
    biografia?: string;
    fotoUrl?: string;
} 