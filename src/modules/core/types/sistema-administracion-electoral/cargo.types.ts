export interface Cargo {
    id: number;
    nombre: string;
    descripcion: string;
    estado: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCargoDto {
    nombre: string;
    descripcion: string;
    estado: string;
}

export interface UpdateCargoDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;
} 