import { createContext } from 'react';

export interface GoogleMapsContextProps {
    isLoaded: boolean;
    google: typeof window.google | undefined;
}

export const GoogleMapsContext = createContext<GoogleMapsContextProps>({
    isLoaded: false,
    google: undefined,
}); 