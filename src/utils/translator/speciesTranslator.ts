import { BaseTranslator } from './baseTranslator';
import { Species, Especie } from '../../models';

export class SpeciesTranslator extends BaseTranslator<Species, Especie> {
    toSpanish(species: Species): Especie {
        return {
            nombre: species.name,
            clasificacion: species.classification,
            designacion: species.designation,
            alturaPromedio: species.average_height,
            colorPiel: species.skin_colors,
            colorCabello: species.hair_colors,
            colorOjos: species.eye_colors,
            promedioVida: species.average_lifespan,
            mundoNatal: species.homeworld,
            idioma: species.language,
            personas: species.people,
            peliculas: species.films,
            creado: species.created,
            editado: species.edited,
            url: species.url
        };
    }

    toEnglish(especie: Especie): Species {
        return {
            name: especie.nombre,
            classification: especie.clasificacion,
            designation: especie.designacion,
            average_height: especie.alturaPromedio,
            skin_colors: especie.colorPiel,
            hair_colors: especie.colorCabello,
            eye_colors: especie.colorOjos,
            average_lifespan: especie.promedioVida,
            homeworld: especie.mundoNatal,
            language: especie.idioma,
            people: especie.personas,
            films: especie.peliculas,
            created: especie.creado,
            edited: especie.editado,
            url: especie.url
        };
    }
}
