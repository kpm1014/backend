import { PlanetsController } from '../../controllers/swapi/planetsController';
import {
    createGetResourceHandler,
    createGetResourceByIdHandler,
    createSearchResourceHandler,
    createGetSchemaHandler
} from '../handlers';

const planetsController = new PlanetsController();

export const getPlanets = createGetResourceHandler(planetsController);
export const getPlanet = createGetResourceByIdHandler(planetsController);
export const searchPlanets = createSearchResourceHandler(planetsController);
export const getPlanetsSchema = createGetSchemaHandler(planetsController);
