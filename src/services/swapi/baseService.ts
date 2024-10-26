import { config } from '../../config/env';
import { PaginatedResponse, TranslatedPaginatedResponse } from '../../models/response';
import { BaseTranslator } from '../../utils/translator/baseTranslator';

export abstract class BaseService {
    protected constructor(
        private readonly endpoint: string,
        private readonly translator?: BaseTranslator<any, any>
    ) { }

    protected get baseUrl(): string {
        return `${config.SWAPI_BASE_URL}/${this.endpoint}`;
    }

    protected translatePaginatedResponse<T, U>(response: PaginatedResponse<T>): TranslatedPaginatedResponse<U> {
        return {
            total: response.count,
            siguiente: response.next,
            anterior: response.previous,
            resultados: this.translator!.toSpanishList(response.results)
        };
    }

    async getAll<T, U = T>(page: number = 1): Promise<PaginatedResponse<T> | TranslatedPaginatedResponse<U>> {
        const response = await this.fetchData<PaginatedResponse<T>>(`${this.baseUrl}/?page=${page}`);
        return this.translator
            ? this.translatePaginatedResponse<T, U>(response)
            : response;
    }

    async getById<T, U = T>(id: string): Promise<U> {
        const response = await this.fetchData<T>(`${this.baseUrl}/${id}`);
        return this.translator
            ? this.translator.toSpanish(response)
            : response as unknown as U;
    }

    async search<T, U = T>(query: string): Promise<PaginatedResponse<T> | TranslatedPaginatedResponse<U>> {
        const response = await this.fetchData<PaginatedResponse<T>>(`${this.baseUrl}/?search=${query}`);
        return this.translator
            ? this.translatePaginatedResponse<T, U>(response)
            : response;
    }

    async getSchema(): Promise<object> {
        return this.fetchData<object>(`${this.baseUrl}/schema`);
    }

    protected async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        return data as T;
    }    
}
