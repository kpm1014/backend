import { BaseService } from './baseService';
import { Species, PaginatedResponse, Especie, TranslatedPaginatedResponse } from '../../models';
import { SpeciesTranslator } from '../../utils/translator/speciesTranslator';

export class SwapiSpeciesService extends BaseService {
  constructor(useTranslation: boolean = false) {
    super('species', useTranslation ? new SpeciesTranslator() : undefined);
  }

  getSpecies(page?: number): Promise<PaginatedResponse<Species> | TranslatedPaginatedResponse<Especie>> {
    return this.getAll<Species, Especie>(page);
  }

  getSpeciesById(id: string): Promise<Species | Especie> {
    return this.getById<Species, Especie>(id);
  }

  searchSpecies(query: string): Promise<PaginatedResponse<Species> | TranslatedPaginatedResponse<Especie>> {
    return this.search<Species, Especie>(query);
  }

  getSpeciesSchema(): Promise<object> {
    return this.getSchema();
  }
}
