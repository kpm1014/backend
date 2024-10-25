import { VehiclesController } from '../../controllers/swapi/vehiclesController';
import {
    createGetResourceHandler,
    createGetResourceByIdHandler,
    createSearchResourceHandler,
    createGetSchemaHandler
} from '../handlers';

const vehiclesController = new VehiclesController();

export const getVehicles = createGetResourceHandler(vehiclesController);
export const getVehicle = createGetResourceByIdHandler(vehiclesController);
export const searchVehicles = createSearchResourceHandler(vehiclesController);
export const getVehiclesSchema = createGetSchemaHandler(vehiclesController);
