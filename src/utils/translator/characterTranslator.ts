import { BaseTranslator } from './baseTranslator';
import { Character } from '../../models/english';
import { Personaje } from '../../models/spanish';

export class CharacterTranslator extends BaseTranslator<Character, Personaje> {
    toSpanish(character: Character): Personaje {
        return {
            id: character.id,
            nombre: character.name,
            altura: character.height,
            masa: character.mass,
            colorCabello: character.hair_color,
            colorPiel: character.skin_color,
            colorOjos: character.eye_color,
            anhoNacimiento: character.birth_year,
            genero: character.gender,
            mundoNatal: character.homeworld,
            peliculas: character.films,
            especies: character.species,
            vehiculos: character.vehicles,
            navesEstelares: character.starships,
            creado: character.created,
            editado: character.edited,
            url: character.url
        };
    }

    toEnglish(personaje: Personaje): Character {
        return {
            id: personaje.id,
            name: personaje.nombre,
            height: personaje.altura,
            mass: personaje.masa,
            hair_color: personaje.colorCabello,
            skin_color: personaje.colorPiel,
            eye_color: personaje.colorOjos,
            birth_year: personaje.anhoNacimiento,
            gender: personaje.genero,
            homeworld: personaje.mundoNatal,
            films: personaje.peliculas,
            species: personaje.especies,
            vehicles: personaje.vehiculos,
            starships: personaje.navesEstelares,
            created: personaje.creado,
            edited: personaje.editado,
            url: personaje.url
        };
    }
}
