export const EstadoSeccion = {
    ACTIVA: 'activa',
    INACTIVA: 'inactiva'
} as const;

export type EstadoSeccionType = typeof EstadoSeccion[keyof typeof EstadoSeccion]; 