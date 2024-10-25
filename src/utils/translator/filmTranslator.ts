import { BaseTranslator } from './baseTranslator';
import { Film, Pelicula } from '../../models';

export class FilmTranslator extends BaseTranslator<Film, Pelicula> {
    toSpanish(film: Film): Pelicula {
        return {
            titulo: film.title,
            episodioId: film.episode_id,
            textoApertura: film.opening_crawl,
            director: film.director,
            productor: film.producer,
            fechaLanzamiento: film.release_date,
            personajes: film.characters,
            planetas: film.planets,
            navesEstelares: film.starships,
            vehiculos: film.vehicles,
            especies: film.species,
            creado: film.created,
            editado: film.edited,
            url: film.url
        };
    }

    toEnglish(pelicula: Pelicula): Film {
        return {
            title: pelicula.titulo,
            episode_id: pelicula.episodioId,
            opening_crawl: pelicula.textoApertura,
            director: pelicula.director,
            producer: pelicula.productor,
            release_date: pelicula.fechaLanzamiento,
            characters: pelicula.personajes,
            planets: pelicula.planetas,
            starships: pelicula.navesEstelares,
            vehicles: pelicula.vehiculos,
            species: pelicula.especies,
            created: pelicula.creado,
            edited: pelicula.editado,
            url: pelicula.url
        };
    }
}
