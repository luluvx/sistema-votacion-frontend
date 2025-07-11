export interface PuntoSeccion {
    id: number;
    seccionId: number;
    latitud: number;
    longitud: number;
    orden: number;
    createdAt: string;
    updatedAt: string;
}

export interface Seccion {
    id: number;
    nombre: string;
    descripcion: string;
    estado: string;
    puntos: PuntoSeccion[];
    createdAt: string;
    updatedAt: string;
}

export interface CreateSeccionDto {
    nombre: string;
    descripcion: string;
    estado: string;
    puntos: Omit<PuntoSeccion, 'id' | 'createdAt' | 'updatedAt' | 'seccionId'>[];
}

export interface UpdateSeccionDto {
    nombre?: string;
    descripcion?: string;
    estado?: string;
    puntos?: Omit<PuntoSeccion, 'id' | 'createdAt' | 'updatedAt' | 'seccionId'>[];
} 