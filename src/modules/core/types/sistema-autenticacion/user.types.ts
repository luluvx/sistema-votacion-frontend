export const UserRole = {
    SUPER_ADMIN: 'super_admin',
    ADMIN_ELECCIONES: 'admin_elecciones',
    JURADO_ELECTORAL: 'jurado_electoral',
    ADMIN_PADRON: 'admin_padron',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export interface User {
    id: number;
    nombre: string;
    email: string;
    password: string;
    rol: UserRole;
}

export interface CreateUserDto {
    nombre: string;
    email: string;
    password: string;
    rol: UserRole;
}

export interface UpdateUserDto {
    nombre?: string;
    email?: string;
    password?: string;
    rol?: UserRole;
} 