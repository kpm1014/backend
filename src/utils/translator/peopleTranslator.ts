import { BaseTranslator } from './baseTranslator';
import { Person, Persona } from '../../models';

export class PeopleTranslator extends BaseTranslator<Person, Persona> {
    toSpanish(person: Person): Persona {
        return {
            nombre: person.name,
            altura: person.height,
            masa: person.mass,
            colorCabello: person.hair_color,
            colorPiel: person.skin_color,
            colorOjos: person.eye_color,
            anhoNacimiento: person.birth_year,
            genero: person.gender,
            mundoNatal: person.homeworld,
            peliculas: person.films,
            especies: person.species,
            vehiculos: person.vehicles,
            navesEstelares: person.starships,
            creado: person.created,
            editado: person.edited,
            url: person.url
        };
    }

    toEnglish(persona: Persona): Person {
        return {
            name: persona.nombre,
            height: persona.altura,
            mass: persona.masa,
            hair_color: persona.colorCabello,
            skin_color: persona.colorPiel,
            eye_color: persona.colorOjos,
            birth_year: persona.anhoNacimiento,
            gender: persona.genero,
            homeworld: persona.mundoNatal,
            films: persona.peliculas,
            species: persona.especies,
            vehicles: persona.vehiculos,
            starships: persona.navesEstelares,
            created: persona.creado,
            edited: persona.editado,
            url: persona.url
        };
    }
}
