import { BaseTranslator } from './baseTranslator';
import { Starship, NaveEstelar } from '../../models';

export class StarshipTranslator extends BaseTranslator<Starship, NaveEstelar> {
    toSpanish(starship: Starship): NaveEstelar {
        return {
            nombre: starship.name,
            modelo: starship.model,
            fabricante: starship.manufacturer,
            costoEnCreditos: starship.cost_in_credits,
            longitud: starship.length,
            velocidadMaximaAtmosfera: starship.max_atmosphering_speed,
            tripulacion: starship.crew,
            pasajeros: starship.passengers,
            capacidadCarga: starship.cargo_capacity,
            consumibles: starship.consumables,
            clasificacionHiperimpulsor: starship.hyperdrive_rating,
            MGLT: starship.MGLT,
            claseNave: starship.starship_class,
            pilotos: starship.pilots,
            peliculas: starship.films,
            creado: starship.created,
            editado: starship.edited,
            url: starship.url
        };
    }

    toEnglish(naveEstelar: NaveEstelar): Starship {
        return {
            name: naveEstelar.nombre,
            model: naveEstelar.modelo,
            manufacturer: naveEstelar.fabricante,
            cost_in_credits: naveEstelar.costoEnCreditos,
            length: naveEstelar.longitud,
            max_atmosphering_speed: naveEstelar.velocidadMaximaAtmosfera,
            crew: naveEstelar.tripulacion,
            passengers: naveEstelar.pasajeros,
            cargo_capacity: naveEstelar.capacidadCarga,
            consumables: naveEstelar.consumibles,
            hyperdrive_rating: naveEstelar.clasificacionHiperimpulsor,
            MGLT: naveEstelar.MGLT,
            starship_class: naveEstelar.claseNave,
            pilots: naveEstelar.pilotos,
            films: naveEstelar.peliculas,
            created: naveEstelar.creado,
            edited: naveEstelar.editado,
            url: naveEstelar.url
        };
    }
}
