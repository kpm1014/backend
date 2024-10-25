import { BaseTranslator } from './baseTranslator';
import { Planet, Planeta } from '../../models';

export class PlanetTranslator extends BaseTranslator<Planet, Planeta> {
    toSpanish(planet: Planet): Planeta {
        return {
            nombre: planet.name,
            periodoRotacion: planet.rotation_period,
            periodoOrbital: planet.orbital_period,
            diametro: planet.diameter,
            clima: planet.climate,
            gravedad: planet.gravity,
            terreno: planet.terrain,
            aguaSuperficial: planet.surface_water,
            poblacion: planet.population,
            residentes: planet.residents,
            peliculas: planet.films,
            creado: planet.created,
            editado: planet.edited,
            url: planet.url
        };
    }

    toEnglish(planeta: Planeta): Planet {
        return {
            name: planeta.nombre,
            rotation_period: planeta.periodoRotacion,
            orbital_period: planeta.periodoOrbital,
            diameter: planeta.diametro,
            climate: planeta.clima,
            gravity: planeta.gravedad,
            terrain: planeta.terreno,
            surface_water: planeta.aguaSuperficial,
            population: planeta.poblacion,
            residents: planeta.residentes,
            films: planeta.peliculas,
            created: planeta.creado,
            edited: planeta.editado,
            url: planeta.url
        };
    }
}
