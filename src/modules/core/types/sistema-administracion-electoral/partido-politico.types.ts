export interface PartidoPolitico {
    id: number;
    nombre: string;
    sigla: string;
    color: string;
    descripcion?: string;
    estado: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreatePartidoPoliticoDto {
    nombre: string;
    sigla: string;
    color: string;
    descripcion?: string;
    estado?: string;
}

export interface UpdatePartidoPoliticoDto {
    nombre?: string;
    sigla?: string;
    color?: string;
    descripcion?: string;
    estado?: string;
} 