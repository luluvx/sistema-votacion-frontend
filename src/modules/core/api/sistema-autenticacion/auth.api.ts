import instance from './instance.api';
import type { AuthResponse, LoginRequest } from '../../types/sistema-autenticacion/auth.types';
import type { User } from '../../types/sistema-autenticacion/user.types';

export const login = async (data: LoginRequest) => {
    const res = await instance.post<AuthResponse>('/auth/login', data, { withCredentials: true });
    return res.data;
};

export const getMe = async (): Promise<User> => {
    const res = await instance.get<User>('/auth/me');
    return res.data;
};

export const logout = async () => {
    await instance.post('/auth/logout');
}; 