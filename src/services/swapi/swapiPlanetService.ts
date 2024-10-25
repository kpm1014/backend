import { BaseService } from './baseService';
import { Planet, PaginatedResponse, Planeta, TranslatedPaginatedResponse } from '../../models';
import { PlanetTranslator } from '../../utils/translator/planetTranslator';

export class SwapiPlanetService extends BaseService {
  constructor(useTranslation: boolean = false) {
    super('planets', useTranslation ? new PlanetTranslator() : undefined);
  }

  getPlanets(page?: number): Promise<PaginatedResponse<Planet> | TranslatedPaginatedResponse<Planeta>> {
    return this.getAll<Planet, Planeta>(page);
  }

  getPlanet(id: string): Promise<Planet | Planeta> {
    return this.getById<Planet, Planeta>(id);
  }

  searchPlanets(query: string): Promise<PaginatedResponse<Planet> | TranslatedPaginatedResponse<Planeta>> {
    return this.search<Planet, Planeta>(query);
  }

  getPlanetSchema(): Promise<object> {
    return this.getSchema();
  }
}
