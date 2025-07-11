import { createContext, useContext } from 'react';
import type { GlobalContextType } from '../types/global-context.type';

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un GlobalProvider');
    }
    return context;
} 