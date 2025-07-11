import type { User } from "./user.types";

export interface AuthResponse {
    access_token: string;
    user: Pick<User, 'id' | 'nombre' | 'email' | 'rol'>;
}

export interface LoginRequest {
    email: string;
    password: string;
} 