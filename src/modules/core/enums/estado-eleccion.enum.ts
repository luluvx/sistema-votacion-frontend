export const EstadoEleccion = {
    PLANIFICADA: 'planificada',
    EN_CURSO: 'en_curso',
    FINALIZADA: 'finalizada',
    CANCELADA: 'cancelada'
} as const;

export type EstadoEleccionType = typeof EstadoEleccion[keyof typeof EstadoEleccion]; 