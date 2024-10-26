export interface APIResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
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
