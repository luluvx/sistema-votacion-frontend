export interface GlobalContextType {
    user: any | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    updateUser: (userUpdate: any) => void;
} 