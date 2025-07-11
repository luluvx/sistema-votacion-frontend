import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout as logoutApi } from '../api/sistema-autenticacion/auth.api';

export function useLogout(setUser: (u: any) => void) {
    const navigate = useNavigate();
    return useCallback(async () => {
        setUser(null);
        await logoutApi();
        navigate('/', { replace: true });
    }, [setUser, navigate]);
} 