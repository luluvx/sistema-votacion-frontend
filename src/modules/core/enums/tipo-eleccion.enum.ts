export const TipoEleccion = {
    PRESIDENCIAL: 'presidencial',
    MUNICIPAL: 'municipal',
    DEPARTAMENTAL: 'departamental',
    NACIONAL: 'nacional',
    REFERENDUM: 'referendum'
} as const;

export type TipoEleccionType = typeof TipoEleccion[keyof typeof TipoEleccion]; 