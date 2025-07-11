export const EstadoCargo = {
    ACTIVO: 'activo',
    INACTIVO: 'inactivo'
} as const;

export type EstadoCargoType = typeof EstadoCargo[keyof typeof EstadoCargo]; 