import { useCallback } from 'react';
import { getMe } from '../api/sistema-autenticacion/auth.api';

export function useSyncUser(setUser: (user: any) => void, setLoading: (loading: boolean) => void, setError: (error: string | null) => void) {
    const syncUser = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
        const me = await getMe();
        setUser({ id: me.id, nombre: me.nombre, email: me.email, rol: me.rol });
        } catch (err: any) {
        setError('No se pudo sincronizar el usuario');
        setUser(null);
        } finally {
        setLoading(false);
        }
    }, [setUser, setLoading, setError]);

    return { syncUser };
} 