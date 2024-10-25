import { BaseTranslator } from './baseTranslator';
import { Vehicle, Vehiculo } from '../../models';

export class VehicleTranslator extends BaseTranslator<Vehicle, Vehiculo> {
    toSpanish(vehicle: Vehicle): Vehiculo {
        return {
            nombre: vehicle.name,
            modelo: vehicle.model,
            fabricante: vehicle.manufacturer,
            costoEnCreditos: vehicle.cost_in_credits,
            longitud: vehicle.length,
            velocidadMaximaAtmosfera: vehicle.max_atmosphering_speed,
            tripulacion: vehicle.crew,
            pasajeros: vehicle.passengers,
            capacidadCarga: vehicle.cargo_capacity,
            consumibles: vehicle.consumables,
            claseVehiculo: vehicle.vehicle_class,
            pilotos: vehicle.pilots,
            peliculas: vehicle.films,
            creado: vehicle.created,
            editado: vehicle.edited,
            url: vehicle.url
        };
    }

    toEnglish(vehiculo: Vehiculo): Vehicle {
        return {
            name: vehiculo.nombre,
            model: vehiculo.modelo,
            manufacturer: vehiculo.fabricante,
            cost_in_credits: vehiculo.costoEnCreditos,
            length: vehiculo.longitud,
            max_atmosphering_speed: vehiculo.velocidadMaximaAtmosfera,
            crew: vehiculo.tripulacion,
            passengers: vehiculo.pasajeros,
            cargo_capacity: vehiculo.capacidadCarga,
            consumables: vehiculo.consumibles,
            vehicle_class: vehiculo.claseVehiculo,
            pilots: vehiculo.pilotos,
            films: vehiculo.peliculas,
            created: vehiculo.creado,
            edited: vehiculo.editado,
            url: vehiculo.url
        };
    }
}
