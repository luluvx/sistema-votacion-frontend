export interface UploadedFile {
    id: number;
    originalName: string;
    filename: string;
    path: string;
    url: string;
    mimetype: string;
    size: number;
    category: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateUploadedFileDto {
    originalName: string;
    filename: string;
    path: string;
    url: string;
    mimetype: string;
    size: number;
    category: string;
    description?: string;
}

export interface UpdateUploadedFileDto {
    originalName?: string;
    filename?: string;
    path?: string;
    url?: string;
    mimetype?: string;
    size?: number;
    category?: string;
    description?: string;
} 