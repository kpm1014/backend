import { BaseService } from './baseService';
import { Starship, PaginatedResponse, NaveEstelar, TranslatedPaginatedResponse } from '../../models';
import { StarshipTranslator } from '../../utils/translator/starshipTranslator';

export class SwapiStarshipService extends BaseService {
    constructor(useTranslation: boolean = false) {
        super('starships', useTranslation ? new StarshipTranslator() : undefined);
    }

    getStarships(page?: number): Promise<PaginatedResponse<Starship> | TranslatedPaginatedResponse<NaveEstelar>> {
        return this.getAll<Starship, NaveEstelar>(page);
    }

    getStarship(id: string): Promise<Starship | NaveEstelar> {
        return this.getById<Starship, NaveEstelar>(id);
    }

    searchStarships(query: string): Promise<PaginatedResponse<Starship> | TranslatedPaginatedResponse<NaveEstelar>> {
        return this.search<Starship, NaveEstelar>(query);
    }

    getStarshipSchema(): Promise<object> {
        return this.getSchema();
    }
}
