
export const buildImageUrl = (relativeUrl: string): string => {
    console.log('🔍 buildImageUrl - Input:', relativeUrl);
    
    if (!relativeUrl) {
        console.log('❌ buildImageUrl - URL vacía, retornando cadena vacía');
        return '';
    }
    
    if (relativeUrl.startsWith('http://') || relativeUrl.startsWith('https://')) {
        console.log('✅ buildImageUrl - URL ya es completa:', relativeUrl);
        return relativeUrl;
    }
    
    let normalizedUrl = relativeUrl.replace(/\\/g, '/');
    
    normalizedUrl = normalizedUrl.startsWith('/') ? normalizedUrl : `/${normalizedUrl}`;
    console.log('📝 buildImageUrl - URL normalizada:', normalizedUrl);
    
    const baseUrl = import.meta.env.VITE_API_ADMINISTRACION_URL;
    console.log('🌐 buildImageUrl - Base URL:', baseUrl);
    
    const fullUrl = `${baseUrl}${normalizedUrl}`;
    console.log('🔗 buildImageUrl - URL final:', fullUrl);
    
    return fullUrl;
};

export const isValidImageUrl = (url: string): boolean => {
    if (!url) return false;
    
    try {
        new URL(url);
        return true;
    } catch {
        return url.startsWith('/') || url.startsWith('./');
    }
}; 