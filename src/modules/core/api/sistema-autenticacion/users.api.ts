import instance from './instance.api';
import type { User, CreateUserDto, UpdateUserDto } from '../../types/sistema-autenticacion/user.types';

export const getUsers = async (): Promise<User[]> => {
    const res = await instance.get<User[]>('/users');
    return res.data;
};

export const getUser = async (id: number): Promise<User> => {
    const res = await instance.get<User>(`/users/${id}`);
    return res.data;
};

export const createUser = async (data: CreateUserDto): Promise<User> => {
    const res = await instance.post<User>('/users', data);
    return res.data;
};

export const updateUser = async (id: number, data: UpdateUserDto): Promise<User> => {
    const res = await instance.patch<User>(`/users/${id}`, data);
    return res.data;
};

export const deleteUser = async (id: number): Promise<void> => {
    await instance.delete(`/users/${id}`);
}; 