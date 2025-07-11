import { useState } from 'react';
import type { User } from '../types/sistema-autenticacion/user.types';

export function useAuthState() {
    const [user, setUser] = useState<Pick<User, 'id' | 'nombre' | 'email' | 'rol'> | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return { user, setUser, loading, setLoading, error, setError };
} 