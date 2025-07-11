export interface Recinto {
    id: number;
    nombre: string;
    descripcion?: string;
    latitud: number;
    longitud: number;
}

export interface CreateRecintoDto {
    nombre: string;
    descripcion?: string;
    latitud: number;
    longitud: number;
}

export interface UpdateRecintoDto {
    nombre?: string;
    descripcion?: string;
    latitud?: number;
    longitud?: number;
} 