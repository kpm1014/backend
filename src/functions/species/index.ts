import { SpeciesController } from '../../controllers/swapi/speciesController';
import {
    createGetResourceHandler,
    createGetResourceByIdHandler,
    createSearchResourceHandler,
    createGetSchemaHandler
} from '../handlers';

const speciesController = new SpeciesController();

export const getSpecies = createGetResourceHandler(speciesController);
export const getSpeciesById = createGetResourceByIdHandler(speciesController);
export const searchSpecies = createSearchResourceHandler(speciesController);
export const getSpeciesSchema = createGetSchemaHandler(speciesController);
