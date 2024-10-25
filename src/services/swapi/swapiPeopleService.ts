import { BaseService } from './baseService';
import { Person, PaginatedResponse, Persona, TranslatedPaginatedResponse } from '../../models';
import { PeopleTranslator } from '../../utils/translator/peopleTranslator';

export class SwapiPeopleService extends BaseService {
  constructor(useTranslation: boolean = false) {
    super('people', useTranslation ? new PeopleTranslator() : undefined);
  }

  getPeople(page?: number): Promise<PaginatedResponse<Person> | TranslatedPaginatedResponse<Persona>> {
    return this.getAll<Person, Persona>(page);
  }

  getPerson(id: string): Promise<Person | Persona> {
    return this.getById<Person, Persona>(id);
  }

  searchPeople(query: string): Promise<PaginatedResponse<Person> | TranslatedPaginatedResponse<Persona>> {
    return this.search<Person, Persona>(query);
  }

  getPeopleSchema(): Promise<object> {
    return this.getSchema();
  }
}
