export interface APIResponse<T> {
    exito: boolean;
    datos?: T;
    error?: string;
    mensaje?: string;
}

export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface TranslatedPaginatedResponse<T> {
    total: number;
    siguiente: string | null;
    anterior: string | null;
    resultados: T[];
}
