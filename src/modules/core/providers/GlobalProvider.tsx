import React, { useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import type { GlobalContextType } from '../types/global-context.type';
import { useAuthState } from '../hooks/useAuthState';
import { useLogin } from '../hooks/useLogin';
import { useLogout } from '../hooks/useLogout';
import { useSyncUser } from '../hooks/useSyncUser';

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, setUser, loading, setLoading, error, setError } = useAuthState();
    const { login } = useLogin(setUser, setLoading, setError);
    const logout = useLogout(setUser);
    const { syncUser } = useSyncUser(setUser, setLoading, setError);

    useEffect(() => {
        syncUser();
    }, [syncUser]);

    const updateUser: GlobalContextType['updateUser'] = (userUpdate) => {
        setUser((prev) => (prev ? { ...prev, ...userUpdate } : prev));
    };

    const value: GlobalContextType = {
        user,
        loading,
        error,
        login,
        logout,
        updateUser,
    };

    return (
        <GlobalContext.Provider value={value}>
        {children}
        </GlobalContext.Provider>
    );
}; 