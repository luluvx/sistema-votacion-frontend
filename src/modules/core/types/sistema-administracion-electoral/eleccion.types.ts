export interface Eleccion {
    id: number;
    nombre: string;
    descripcion: string;
    tipo: string;
    estado: string;
    fechaInicio: string;
    fechaFin: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateEleccionDto {
    nombre: string;
    descripcion: string;
    tipo: string;
    estado: string;
    fechaInicio: string;
    fechaFin: string;
}

export interface UpdateEleccionDto {
  nombre?: string;
  descripcion?: string;
  tipo?: string;
  estado?: string;
  fechaInicio?: string;
  fechaFin?: string;
} 