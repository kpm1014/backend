import { BaseService } from './baseService';
import { Film, PaginatedResponse, Pelicula, TranslatedPaginatedResponse } from '../../models';
import { FilmTranslator } from '../../utils/translator/filmTranslator';

export class SwapiFilmService extends BaseService {
  constructor(useTranslation: boolean = false) {
    super('films', useTranslation ? new FilmTranslator() : undefined);
  }

  getFilms(page?: number): Promise<PaginatedResponse<Film> | TranslatedPaginatedResponse<Pelicula>> {
    return this.getAll<Film, Pelicula>(page);
  }

  getFilm(id: string): Promise<Film | Pelicula> {
    return this.getById<Film, Pelicula>(id);
  }

  searchFilms(query: string): Promise<PaginatedResponse<Film> | TranslatedPaginatedResponse<Pelicula>> {
    return this.search<Film, Pelicula>(query);
  }

  getFilmSchema(): Promise<object> {
    return this.getSchema();
  }
}
