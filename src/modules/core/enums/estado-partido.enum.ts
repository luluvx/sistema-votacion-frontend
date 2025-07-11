export const EstadoPartido = {
    ACTIVO: 'activo',
    INACTIVO: 'inactivo',
    SUSPENDIDO: 'suspendido'
} as const;

export type EstadoPartidoType = typeof EstadoPartido[keyof typeof EstadoPartido]; 