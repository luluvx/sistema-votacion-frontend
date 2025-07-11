import { useCallback } from 'react';
import { login as loginApi } from '../api/sistema-autenticacion/auth.api';

export function useLogin(setUser: (user: any) => void, setLoading: (loading: boolean) => void, setError: (error: string | null) => void) {
    const login = useCallback(async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
        const res = await loginApi({ email, password });
        console.log('Respuesta del login:', res);
        setUser(res.user);
        // Guardar token y usuario en localStorage
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
        console.log('Token guardado en localStorage:', localStorage.getItem('token'));
        console.log('Usuario guardado en localStorage:', localStorage.getItem('user'));
        } catch (err: any) {
        setError(err?.response?.data?.message || 'Error de autenticación');
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.error('Error en login:', err);
        } finally {
        setLoading(false);
        }
    }, [setUser, setLoading, setError]);

    return { login };
} 